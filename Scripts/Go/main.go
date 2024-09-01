package main

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"os"
	"regexp"
	"slices"
	"encoding/csv"
)

type FunctionInfo struct {
	Name       string
	LineNumber int
	FilePath   string
}

func main() {
	ignoreFolders := []string{"node_modules", "dist", "vendor", ".firebase", "package-lock.json", ".git"}
	path, err := os.Getwd()
	if err != nil {
		log.Println(err)
	}
	allData := scanDirectory(path, ignoreFolders)
	writeFunctionsToFile(allData, path + "\\allData.csv")
}

func scanDirectory(path string, ignoreFolders []string) []FunctionInfo {
	contents, err := os.ReadDir(path)
	if err != nil {
		log.Println(err)
	}
	pattern := `\bfunction\s+(\w+)\s*\(`
	var functionInfos []FunctionInfo
	for _, element := range contents {
		if slices.Contains(ignoreFolders, element.Name()) {
			continue
		}
		newPath := path + "\\" + element.Name()
		if isFile(element) {
			singleFileInfos := extractRegexPatternFromFile(newPath, pattern)
			functionInfos = append(functionInfos, singleFileInfos...)
		} else {
			entireDirectoryInfo := scanDirectory(newPath, ignoreFolders)
			functionInfos = append(functionInfos, entireDirectoryInfo...)
		}
	}
	return functionInfos
}

func isFile(pathEndName os.DirEntry) bool {
	return !pathEndName.IsDir()
}

func extractRegexPatternFromFile(filePath string, regexPattern string) []FunctionInfo {
	fileData := getDataFromFile(filePath)
	re, err := regexp.Compile(regexPattern)
	if err != nil {
		log.Println(err)
	}
	matches := re.FindAllStringSubmatch(fileData, -1)
	var functionInfos []FunctionInfo
	for _, match := range matches {
		info := FunctionInfo{
			Name:       match[1],
			LineNumber: 0,
			FilePath:   filePath,
		}
		functionInfos = append(functionInfos, info)
	}
	return functionInfos
}

func getDataFromFile(filePath string) string {
	file, err := os.Open(filePath)
	if err != nil {
		log.Println(err)
	}
	fileContent := ""
	//
	reader := bufio.NewReader(file)
	for {
		line, err := reader.ReadString('\n')
		if err == io.EOF {
			fileContent = fileContent + line
			break
		}
		if err != nil {
			fmt.Println(err)
			break
		}
		fileContent = fileContent + line
	}
	defer file.Close()
	return fileContent
}

// 3. Output the list of function names to a file
func writeFunctionsToFile(functionInfos []FunctionInfo, outputPath string) error {
	// Create or open the CSV file
	file, err := os.Create(outputPath)
	if err != nil {
		return fmt.Errorf("could not create file: %w", err)
	}
	defer file.Close()

	// Create a new CSV writer
	writer := csv.NewWriter(file)
	defer writer.Flush()

	// Write the header row
	header := []string{"Name", "LineNumber", "FilePath"}
	if err := writer.Write(header); err != nil {
		return fmt.Errorf("could not write header: %w", err)
	}

	// Write each FunctionInfo entry to the CSV
	for _, functionInfo := range functionInfos {
		record := []string{
			functionInfo.Name,
			fmt.Sprintf("%d", functionInfo.LineNumber),
			functionInfo.FilePath,
		}
		if err := writer.Write(record); err != nil {
			return fmt.Errorf("could not write record %v: %w", record, err)
		}
	}

	return nil
}