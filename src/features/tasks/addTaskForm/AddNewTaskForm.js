import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { AiOutlinePlus } from "react-icons/ai";

import { addTask } from "../tasksSlice";
import { addTaskToProject, selectProjectById } from "../../projects/projectsSlice";
import { priorities } from "../../filters/prioritiesList";
import SelectPriority from "../../../components/selectPriority/SelectPriority";
import "./style.css";

const AddNewTaskForm = ({ projectId }) => {
  const dispatch = useDispatch();

  const { title: projectTitle } = useSelector(state => selectProjectById(state, projectId))

  const [inputText, setInputText] = useState("");

  const [priority, setPriority] = useState("high");
  const handlePriorityChange = (e) => {
    setPriority(e.target.value)
  }

  const handleTaskSave = (e) => {
    e.preventDefault();
    if (!inputText) return;

    const content = inputText.trim();

    const id = nanoid();
    dispatch(addTask({ projectId, content, id, selected: false, priority: priority}));
    dispatch(addTaskToProject({projectId, taskId: id}));
    setInputText("");
    setPriority("high");
  }

  return (
    <div className="add-task-container">
      <form className="add-task">
        <input 
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder={`Add a new task inside '${projectTitle}' category`}
          className="add-task__input-line"
          maxLength={180}
        />
        <SelectPriority 
          optionsList={priorities} 
          defaultValue={priority} 
          handleChange={handlePriorityChange}
          selectorName="add-task__select"
        />
        <button onClick={handleTaskSave}>
          <AiOutlinePlus className="add-task__add-btn"/>
        </button>
      </form>
    </div>
  );
}

export default AddNewTaskForm;