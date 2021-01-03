import React, { useState } from "react";

export const LinkForm = (props) => {
  // state
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
  };
  const [values, setValues] = useState(initialStateValues);

  // methods
  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  // html
  return (
    <form className="card card-body" onSubmit={handlesubmit}>
      <div className="from-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://someurl.com"
          name="url"
          id=""
          onChange={handleInputchange}
          value={values.url}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          placeholder="website name"
          className="form-control"
          name="name"
          id=""
          onChange={handleInputchange}
          value={values.name}
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          className="form-control"
          placeholder="write a website description, buddy"
          rows="3"
          onChange={handleInputchange}
          value={values.description}
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block">Save</button>
    </form>
  );
};
export default LinkForm;
