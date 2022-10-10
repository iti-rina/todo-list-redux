import { statusFilters } from "../filtersSlice";
import "./style.css";

const StatusFilter = ({ value: status, onChange }) => {

  const renderedFilters = Object.keys(statusFilters).map(key => {
    const value = statusFilters[key];
    const handleClick = () => onChange(value);
    const className = value === status ? "selected" : "";
    return (
      <button 
        className={`${className} options__button`} 
        onClick={handleClick}
        key={key}
      >
        {key}
      </button>
    );
  });

  return (
    <div className="status-filters">
      <span className="status-filters__title">Filter by status:</span>
      <div className="status-filters__options options">
        {renderedFilters}
      </div>
    </div>
  );
}

export default StatusFilter;