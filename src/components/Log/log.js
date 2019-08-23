import React from "react";


// This file exports both the List and ListItem components

export default function Log({ children }) {
  return (
    <div className="log-overflow-container">
      <ul className="log-group">{children}</ul>
    </div>
  );
}


