import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomTextField from "./CustomTextField";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        jobType: Yup.string().required("Required"),
        acceptedTerms: Yup.bool()
          .required("The terms must be accepted.")
          .oneOf([true], "The terms must be accepted."),
      })}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="form-inline form-style">
        <CustomTextField
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Jane"
        />

        <CustomTextField
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Doe"
        />

        <CustomTextField
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@formik.com"
        />

        <CustomSelect label="Job Type" name="jobType">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </CustomSelect>

        <CustomCheckbox name="acceptedTerms">
          <p className={"mt-3 ml-2"}>I accept the terms and conditions</p>
        </CustomCheckbox>

        <button type="submit" className="btn m-2 w-100 button-style">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
