
import axios from "axios";

export default {
  // Gets all books
  getLog: function() {
    return axios.get("/api/log");
  },
  // Gets the book with the given id
  getLog: function(id) {
    return axios.get("/api/log/" + id);
  },
  // Deletes the book with the given id
  deleteLog: function(id) {
    return axios.delete("/api/log/" + id);
  },
  // Saves a book to the database
  saveLog: function(bookData) {
    return axios.post("/api/log", bookData);
  }
};
