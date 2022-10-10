import { priorities as availablePriorities } from "../prioritiesList";
import Checkbox from "../../../components/checkbox/Checkbox";
import "./style.css";

const PriorityFilter = ({ value: priorities, onChange}) => {
  const renderedPriorities = availablePriorities.map(priority => {
    const selected = priorities.includes(priority);
    
    const handleChange = () => {
      const actionType = selected ? "removed" : "added";
      onChange(priority, actionType);
    }

    return (

      <label key={priority} className="priority">
        <Checkbox selected={selected} handleChange={handleChange} selectorName="priority__checkbox"/>
        <span 
        className="priority__text">{priority}</span>
      </label>
    );
  });

  return (
    <div className="priority-filters">
      <span className="priority-filters__title">Filter by priority</span>
      <div className="priority-filters__options options">
        {renderedPriorities}
      </div>
    </div>
      
  );
}

export default PriorityFilter;
