import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
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
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="form-group my-2 d-flex d-row align-items-center justify-content-center">
        <label
          htmlFor="firstName"
          className={"mr-2 p-2"}
          style={{
            minWidth: "160px",
          }}
        >
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className="form-group my-2 d-flex d-row align-items-center">
        <label
          htmlFor="lastName"
          className={"mr-2 p-2"}
          style={{ minWidth: "160px" }}
        >
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <button type="submit" className="btn btn-dark m-2 w-100">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
