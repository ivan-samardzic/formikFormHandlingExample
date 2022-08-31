import React from "react";
import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [getFieldProps, getFieldMeta] = useField(props);
  return (
    <div className="w-100 d-flex p-2 align-items-center flex-column">
      <label
        htmlFor={props.id || props.name}
        className={"p-2"}
        style={{
          minWidth: "auto",
          display: "block",
          textAlign: "left",
        }}
      >
        {label}
      </label>
      <select {...getFieldProps} {...props} />
      {getFieldMeta.touched && getFieldMeta.error && (
        <div className="error text-danger">{getFieldMeta.error}</div>
      )}
    </div>
  );
};

export default CustomSelect;
