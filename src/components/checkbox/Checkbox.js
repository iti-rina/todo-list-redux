import React from "react";

export default function Checkbox({ selected, selectorName, handleChange, viewBox }) {

  return (
    <div className={`${selectorName} checkbox`} >
      <label>
        <input
          type="checkbox"
          value={selected}
          onChange={handleChange}
          className={`${selectorName}_input`}
          tabIndex={0}
        />
        <svg
        className={`${selectorName}_icon ${selected ? "checkbox_active" : ""}`}
        aria-hidden="true"
        viewBox={viewBox}
        fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={selected ? "#fff" : "none"}
          />
        </svg>
      </label>
    </div>
  );
}