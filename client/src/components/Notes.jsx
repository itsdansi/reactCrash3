import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3005";

function Notes() {
  const [notes, setNotes] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // fetch("/notes/")
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then((jsonRes) => setNotes(jsonRes));
  });
  return (
    <div className="container">
      <h2>Notes page</h2>
      {notes.map((note, index) => (
        <div key={index}>
          <h2> {note.title}</h2>
          <p> {note.content}</p>
        </div>
      ))}
    </div>
  );
}
export default Notes;
