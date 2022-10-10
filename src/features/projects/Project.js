import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { statusFilterChanged } from "../filters/filtersSlice";
import { selectProjectById } from "./projectsSlice";

const Project = ({ projectId }) => {
  const project = useSelector(state => selectProjectById(state, projectId));
  const dispatch = useDispatch();

  return (
    <li className="project__title">
      <NavLink 
        to={`/${projectId}`} 
        style={({isActive}) => ({color: isActive ? "#EA5959" : "", fontWeight: "700"})}
        onClick={() => {dispatch((statusFilterChanged("all")))}}
      >
        {project?.title}
      </NavLink>
    </li>
  );
}

export default Project;