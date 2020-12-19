import React from "react";
import LinkForm from "./LinkForm";

const Links = () => {
  const addTask = () => {
    console.debug("add task");
  };

  return (
    <div className="col-12">
      <LinkForm addOrEdit={addTask} />
      <h1>Links</h1>
    </div>
  );
};
export default Links;
