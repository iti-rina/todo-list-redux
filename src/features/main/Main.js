import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectProjectById } from "../projects/projectsSlice";
import AddNewTaskForm from "../tasks/addTaskForm/AddNewTaskForm";
import TaskList from "../tasks/TaskList";
import "./style.css";

const Main = () => {
  const { projectId } = useParams();
  const project = useSelector(state => selectProjectById(state, projectId));

  return (
    <section className="main-container main">
      <h2 className="main__project-title">{project?.title}</h2>
      <AddNewTaskForm projectId={projectId} />
      <TaskList projectId={projectId} />
    </section>
  );
}

export default Main;