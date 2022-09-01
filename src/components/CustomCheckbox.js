import React from "react";
import { useField } from "formik";

const CustomCheckbox = ({ children, ...props }) => {
  const [getFieldProps, getFieldMeta] = useField({
    ...props,
    type: "checkbox",
  });
  return (
    <div className="d-flex flex-row align-items-center">
      <label className="checkbox-input label-style">
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
