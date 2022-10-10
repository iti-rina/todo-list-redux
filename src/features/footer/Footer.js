import { useDispatch, useSelector } from "react-redux";

import { statusFilterChanged, priorityFilterChanged } from "../filters/filtersSlice";
import StatusFilter from "../filters/statusFilter/StatusFilter";
import PriorityFilter from "../filters/priorityFilter/PriorityFilter";
import "./style.css";

const Footer = () => {
  const dispatch = useDispatch();
  const { status, priorities } = useSelector(state => state.filters);

  const handleStatusFilterChanged = (status) => {
    dispatch(statusFilterChanged(status));
  }

  const handlePriorityChange = (priority, actionType) => (
    dispatch(priorityFilterChanged(priority, actionType))
  );

  return (
    <footer className="footer">
      <StatusFilter value={status} onChange={handleStatusFilterChanged} />
      <PriorityFilter value={priorities} onChange={handlePriorityChange} />
    </footer>
  );
}

export default Footer;