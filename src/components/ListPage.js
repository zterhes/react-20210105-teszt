import React, { useState } from "react";

export default ({ props }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <p>{props.title}</p>
      </div>
    </div>
  );
};
