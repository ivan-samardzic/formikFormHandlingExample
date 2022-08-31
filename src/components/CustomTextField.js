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
        className="text-input"
        {...getFieldProps}
        {...props}
        style={{
          width: "280px",
          padding: "16px 24px",
          border: `1px solid ${getFieldMeta.error ? "red" : "#0037AD"}`,
          borderRadius: "24px",
        }}
      />
      {getFieldMeta.touched && getFieldMeta.error && (
        <div className="error text-danger">{getFieldMeta.error}</div>
      )}
    </>
  );
};

export default CustomTextField;
