import { useSelector } from "react-redux";

import { selectAllProjects } from "./projectsSlice";
import Project from "./Project";
import AddNewCategoryForm from "./addProjectForm/AddNewProjectForm";
import "./style.css";

const Projects = () => {
  const projects = useSelector(selectAllProjects);
  
  return (
    <section className="sidebar">
      <ul className="project-list project">
        {projects ? projects.map(project => <Project key={project.id} projectId={project.id} />) : null}
      </ul>
      <AddNewCategoryForm />
    </section>
  );
}

export default Projects;