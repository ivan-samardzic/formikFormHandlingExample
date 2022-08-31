import React from "react";

const Title = () => {
  return (
    <div className="d-flex flex-row align-items-center">
      <div
        style={{
          flexDirection: "column",
          alignItems: "center",
          width: "auto",
          justifyContent: "center",
          alignContent: "center",
          margin: "0px 8px",
        }}
      >
        <div
          className="text-dark"
          style={{ width: "auto", fontSize: "1em", alignContent: "center" }}
        >
          Formik App
        </div>
      </div>
    </div>
  );
};

export default Title;
