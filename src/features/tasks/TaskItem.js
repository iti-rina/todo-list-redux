import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";

import { removeTask, selectTaskById, taskPriorityChanged } from "./tasksSlice";
import Checkbox from "../../components/checkbox/Checkbox";
import { priorities } from "../../features/filters/prioritiesList";
import SelectPriority from "../../components/selectPriority/SelectPriority";
import { toggleTaskSelect } from "../tasks/tasksSlice";

const TaskItem = ({ taskId }) => {
  const dispatch = useDispatch();
  const task = useSelector(state => selectTaskById(state, taskId));
  const { content, id, selected, priority } = task;

  const handleDeleteTask = (e) => {
    e.preventDefault();
    dispatch(removeTask(task.id));
  }

  const handlePriorityChange = (e) => {
    dispatch(taskPriorityChanged({ id, changes: {priority: e.target.value}}))
  }

  const handleCheckboxToggle = (e) => {
    dispatch(toggleTaskSelect({id: taskId, changes: {selected: !selected}}))
  }

  return (
    <div className="task">
      <Checkbox selected={selected} taskId={id} selectorName="task__checkbox" handleChange={handleCheckboxToggle} viewBox="0 0 15 11" />

      <span className="task__text" style={ selected ? { textDecoration: "line-through"} : null}>{content}</span>

        <SelectPriority 
          optionsList={priorities} 
          defaultValue={priority} 
          handleChange={handlePriorityChange}
          selectorName="task__priority"
        />

      <button className="task__delete-btn" onClick={handleDeleteTask}>
        <AiOutlineDelete 
          style={{width: "20px", height: "20px", color: "#EA5959"}}
        />
      </button>
    </div>
  );
}

export default TaskItem;