package handler

import (
	"net/http"
	"fmt"
)


func HandleTask(res http.ResponseWriter, req *http.Request) { 
	if req.Method == http.MethodGet {
		getAllTasks(res)
	}
} 


func getAllTasks(res http.ResponseWriter) {
	fmt.Fprintf(res, "yayyy")
}