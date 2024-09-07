package handler

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type TodoItem struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Fulfilled   bool   `json:"fulfilled"`
}

func HandleTask(res http.ResponseWriter, req *http.Request, db *sql.DB) {
	if req.Method == http.MethodGet {
		getAllTasks(res, db)
	}
	if req.Method == http.MethodPost {
		createNewTask(res, req, db)
	}
}

func getAllTasks(res http.ResponseWriter, db *sql.DB) {
	res.Header().Set("Content-Type", "application/json")
	rows, err := db.Query("SELECT * FROM todoItem")
	if err != nil {
		log.Println(err)
	}
	defer rows.Close()
	var tasks []TodoItem
	for rows.Next() {
		var task TodoItem
		err := rows.Scan(&task.ID, &task.Title, &task.Description, &task.Fulfilled)
		if err != nil {
			http.Error(res, err.Error(), http.StatusInternalServerError)
			return
		}
		tasks = append(tasks, task)

	}
	json.NewEncoder(res).Encode(tasks)

}

func createNewTask(res http.ResponseWriter, req *http.Request, db *sql.DB) {
	var task TodoItem
	err := json.NewDecoder(req.Body).Decode(&task)
	if err != nil {
		http.Error(res, err.Error(), http.StatusBadRequest)
		return
	} 
	fmt.Println(task)
}
