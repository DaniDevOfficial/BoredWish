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
	if req.Method == http.MethodDelete {
		deleteTaskById(res, req, db)
	}
	if req.Method == http.MethodPut {
		updateTaskById(res, req, db)
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
	sqlStatement := "INSERT INTO todoItem (title, description, fulfilled) VALUES (?, ?, ?)"
	_, err = db.Exec(sqlStatement, task.Title, task.Description, task.Fulfilled)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		return
	}
}

func deleteTaskById(res http.ResponseWriter, req *http.Request, db *sql.DB) {
	id := req.URL.Query().Get("id")
	if id == "" {
		http.Error(res, "Missing task ID", http.StatusBadRequest)
		return
	}
	sqlStatement := "DELETE FROM todoItem WHERE id = ?"

	_, err := db.Exec(sqlStatement, id)
	if err != nil {
		log.Println(err)

		return
	}

	fmt.Fprintf(res, "yaayyy")
}

func updateTaskById(res http.ResponseWriter, req *http.Request, db *sql.DB) {
	id := req.URL.Query().Get("id")

	if id == "" {
		http.Error(res, "No Id Provided", http.StatusBadRequest)
		return
	}
	var existingID string
	sqlCheckStatement := "SELECT id FROM todoItem WHERE id = ?"
	err := db.QueryRow(sqlCheckStatement, id).Scan(&existingID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(res, "Task does not exist", http.StatusNotFound)
			return
		}
		http.Error(res, "Database error", http.StatusInternalServerError)
		fmt.Println("Error checking task existence:", err)
		return
	}

	var task TodoItem
	err = json.NewDecoder(req.Body).Decode(&task)
	if err != nil {
		http.Error(res, "Whopsie Daysie", http.StatusInternalServerError)
		return
	}
	sqlUpdateStatement := "UPDATE todoItem SET title = ?, description = ?, fulfilled = ? WHERE id = ?"
	_, err = db.Exec(sqlUpdateStatement, task.Title, task.Description, task.Fulfilled, id)
	if err != nil {
		http.Error(res, "Whopsie Daysie", http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(res, "Yayyy it updated")
}
