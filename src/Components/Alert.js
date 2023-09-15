import React from "react";

const Alert = (props) => {
  return (
    <>
      <div class= {`alert alert-${props.typeOf}`} role="alert">
        {props.title}
      </div>
    </>
  );
};

export default Alert;
