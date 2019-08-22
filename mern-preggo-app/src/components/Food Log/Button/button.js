import React from "react";
import './button.css'


export default function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }

  