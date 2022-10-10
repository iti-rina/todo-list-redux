import { useSelector } from "react-redux";

import TaskItem from "./TaskItem";
import { selectFilteredTaskIds } from "./tasksSlice";
import "./style.css";

const TaskList = ({ projectId }) => {
  const taskIds = useSelector(state => selectFilteredTaskIds(state, projectId)) || [];
  
  return (
    <div className="task-container">
      {taskIds ? taskIds.map(id => <TaskItem key={id} taskId={id} />) : null}
    </div>
  );
}

export default TaskList;