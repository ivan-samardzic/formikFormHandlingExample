import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  const validate = (values) => {
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
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

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
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
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
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
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
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
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
