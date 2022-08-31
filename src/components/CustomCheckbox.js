import React from "react";
import { useField } from "formik";

const CustomCheckbox = ({ children, ...props }) => {
  const [getFieldProps, getFieldMeta] = useField({
    ...props,
    type: "checkbox",
  });
  return (
    <div className="d-flex flex-row align-items-center">
      <label
        className="checkbox-input"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "auto",
        }}
      >
        <input type="checkbox" {...getFieldProps} {...props} />
        {children}
      </label>
      {getFieldMeta.touched && getFieldMeta.error && (
        <div className="error">{getFieldMeta.error}</div>
      )}
    </div>
  );
};

export default CustomCheckbox;
