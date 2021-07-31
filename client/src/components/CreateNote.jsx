import React, { useState } from "react";
import axios from "axios";

function CreateNote() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;
    // console.log(event.target);

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handelClick(event) {
    event.preventDefault();
    // const newNote = {
    //   tilte: input.title,
    //   content: input.content,
    // };

    axios
      .post("http://localhost:3005/create", input)
      .then((res) => {
        //clear input box
        setInput({
          title: "",
          content: "",
        });
        //log created data
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h2>Create note</h2>
      <form action="">
        <div className="form-group">
          <input
            type="text"
            onChange={handelChange}
            name="title"
            placeholder="Note title"
            value={input.title}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={handelChange}
            name="content"
            placeholder="Note details"
            value={input.content}
            className="form-control"
          ></textarea>
        </div>
        <button onClick={handelClick} className="btn btn-large btn-info">
          Add Note
        </button>
      </form>
    </div>
  );
}
export default CreateNote;
