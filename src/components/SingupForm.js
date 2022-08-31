import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  /* const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  }; */

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const { getFieldProps } = formik;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form-inline d-flex flex-column justify-content-center align-items-center border pr-3 m-3"
    >
      <div className="form-group my-2 d-flex flex-row align-items-start">
        <label
          htmlFor="email"
          className={"mr-2 p-2"}
          style={{
            minWidth: "160px",
          }}
        >
          Email Address
        </label>
        <div className={"d-flex flex-column align-items-start"}>
          <input id="email" type="email" {...getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && (
            <div className={"text-danger"}>{formik.errors.email}</div>
          )}
        </div>
      </div>
      <div className="form-group my-2 d-flex flex-row align-items-center justify-content-center">
        <label
          htmlFor="firstName"
          className={"mr-2 p-2"}
          style={{
            minWidth: "160px",
          }}
        >
          First Name
        </label>
        <div className={"d-flex flex-column align-items-start"}>
          <input id="firstName" type="text" {...getFieldProps("firstName")} />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className={"text-danger"}>{formik.errors.firstName}</div>
          )}
        </div>
      </div>

      <div className="form-group my-2 d-flex d-row align-items-center">
        <label
          htmlFor="lastName"
          className={"mr-2 p-2"}
          style={{ minWidth: "160px" }}
        >
          Last Name
        </label>
        <div className={"d-flex flex-column align-items-start"}>
          <input id="lastName" type="text" {...getFieldProps("lastName")} />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className={"text-danger"}>{formik.errors.lastName}</div>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-dark m-2 w-100">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
