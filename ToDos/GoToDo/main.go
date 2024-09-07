package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"todo/handler"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func initDB() {
	var err error
	db, err = sql.Open("mysql", "root:root@tcp(127.0.0.1:3306)/todo")
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Database connected!")
}

func main() {
	initDB()
	handleRequest()
}

func helloWorld(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(res, "Hello World")
}

func handleRequest() {
	http.HandleFunc("/", helloWorld)
	http.HandleFunc("/todo", func(w http.ResponseWriter, r *http.Request) {
		handler.HandleTask(w, r, db) // pass the db connection to handler
	})	
	fmt.Println("Server is listening on port 8001...")
	log.Fatal(http.ListenAndServe(":8001", nil))
}
