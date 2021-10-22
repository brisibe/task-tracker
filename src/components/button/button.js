import React from "react";

export default function button(...props) {
  return (
    <button className="btn" {...props}>
      Save Task
    </button>
  );
}
