import React from "react";
import { useField } from "formik";

const CustomTextField = ({ label, ...props }) => {
  const [getFieldProps, getFieldMeta] = useField(props);
  return (
    <>
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
      <input
        className="text-input input-style"
        {...getFieldProps}
        {...props}
        style={{
          border: `1px solid ${getFieldMeta.error ? "red" : "#0037AD"}`,
        }}
      />
      {getFieldMeta.touched && getFieldMeta.error && (
        <div className="error text-danger">{getFieldMeta.error}</div>
      )}
    </>
  );
};

export default CustomTextField;
