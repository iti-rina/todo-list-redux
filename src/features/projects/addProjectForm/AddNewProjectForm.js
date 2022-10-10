import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

import { addProject } from "../projectsSlice";
import "./style.css";

const AddNewProjectForm = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleProjectSave = (e) => {
    e.preventDefault();

    if (!inputText) return;

    const title = inputText.trim();

    dispatch(addProject({title, id: nanoid(), taskAmount: 0, tasks: [] }));
    setInputText("");
  }

  return (
    <div className="add-project-container">
      <form className="add-project">

        <input 
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Create new list"
          className="add-project__input-line"
        />

        <button onClick={handleProjectSave}>
          <AiOutlinePlus 
            style={{width: "20px", height: "20px", color: "#EA5959"}}
            className="add-project__add-btn"
          />
        </button>
      </form>
    </div>
  );
}

export default AddNewProjectForm;