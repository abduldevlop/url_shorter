import React from "react";

const Form = () => {
  return (
    <div className="form_container">
      <h1 className="title">
        Past Your <span>Url</span> here
      </h1>
      <div>
        <input type="text" placeholder="past url..." className="url_input" />
        <button className="submit_btn">Submit</button>
      </div>
    </div>
  );
};

export default Form;
