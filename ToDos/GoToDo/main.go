package main

import (
	"fmt"
	"log"
	"net/http"
	"todo/handler"
)

func main() {
	handleRequest()
}

func helloWorld(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(res, "Hello World")
}

func handleRequest() {
	http.HandleFunc("/", helloWorld)
	http.HandleFunc("/todo", handler.HandleTask)
	fmt.Println("Server is listening on port 8001...")
	log.Fatal(http.ListenAndServe(":8001", nil))
}
