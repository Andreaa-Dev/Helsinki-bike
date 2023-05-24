import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const validationSchema = Yup.object().shape({
  departure: Yup.date().required(" Departure date is required"),
  return: Yup.date().required(" Return date is required"),

  departureStationId: Yup.number()
    .required("Departure station id is required")
    .positive("Departure station id  must be positive"),

  returnStationId: Yup.number()
    .required("Return station id is required")
    .positive("Return station id  must be positive"),

  coveredDistance: Yup.number()
    .required("Covered distance is required")
    .positive("Covered distance  must be positive"),

  duration: Yup.number()
    .required("Duration is required")
    .positive("Duration  must be positive"),

  departureStationName: Yup.string().required(
    "Departure station name is required"
  ),
  returnStationName: Yup.string().required("Return station name is required"),
});

const initialValues = {
  date: "",
  number: "",
  text: "",
};

const JourneyForm = () => {
  const handleSubmit = () => {
    console.log("hi");
  };

  return (
    <div>
      <h1>Journey form </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="date">Departure date:</label>
              <Field
                as={TextField}
                id="date"
                name="departure"
                type="date"
                variant="outlined"
                error={Boolean(errors.date && touched.date)}
                helperText={<ErrorMessage name="date" />}
              />
            </div>
            <div>
              <label htmlFor="date">Return date:</label>
              <Field
                as={TextField}
                id="date"
                name="return"
                type="date"
                variant="outlined"
                error={Boolean(errors.date && touched.date)}
                helperText={<ErrorMessage name="date" />}
              />
            </div>
            <div>
              <label htmlFor="number">Return station id:</label>
              <Field
                as={TextField}
                id="number"
                name="returnStationId"
                type="number"
                variant="outlined"
                error={Boolean(errors.number && touched.number)}
                helperText={<ErrorMessage name="number" />}
              />
            </div>

            <div>
              <label htmlFor="text">Text:</label>
              <Field
                as={TextField}
                id="text"
                name="text"
                variant="outlined"
                //   error={Boolean(errors.text && touched.text)}
                helperText={<ErrorMessage name="text" />}
              />
            </div>

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JourneyForm;
