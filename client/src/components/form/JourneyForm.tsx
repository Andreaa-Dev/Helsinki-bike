import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikState } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { backendUrl } from "../../redux/thunk/journeys";

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

type InitialValue = {
  departure: Date;
  return: Date;
  departureStationId: number;
  departureStationName: string;
  returnStationId: number;
  returnStationName: string;
  coveredDistance: number;
  duration: number;
};

const initialValues: InitialValue = {
  departure: new Date(),
  return: new Date(),
  departureStationId: 0,
  departureStationName: "",
  returnStationId: 0,
  returnStationName: "",
  coveredDistance: 0,
  duration: 0,
};

const url = `${backendUrl}/journeys`;

export default function JourneyForm() {
  const [open, setOpen] = useState(false);

  function handleClose(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }
  type ResetForm = {
    resetForm: (nextState?: Partial<FormikState<InitialValue>>) => void;
  };

  function handleSubmit(values: InitialValue, { resetForm }: ResetForm) {
    axios
      .post(url, values)
      .then((response) => {
        if (response.status === 200) {
          setOpen(true);
          resetForm();
        } else <p> Please try again</p>;
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <Typography variant="h3"> Journey form</Typography>
      <div className="journeyForm">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box className="formItem">
                <Typography className="formTitle">Departure date: </Typography>
                <Field
                  className="formField"
                  as={TextField}
                  id="date"
                  name="departure"
                  type="date"
                  variant="outlined"
                  error={Boolean(errors.departure && touched.departure)}
                  helperText={<ErrorMessage name="departure" />}
                />
              </Box>
              <Box className="formItem">
                <Typography className="formTitle">Return date: </Typography>
                <Field
                  className="formField"
                  as={TextField}
                  id="date"
                  name="return"
                  type="date"
                  variant="outlined"
                  error={Boolean(errors.return && touched.return)}
                  helperText={<ErrorMessage name="return" />}
                />
              </Box>
              <Box className="formItem">
                <Typography className="formTitle">
                  Departure station id:
                </Typography>
                <Field
                  className="formField"
                  as={TextField}
                  id="number"
                  name="departureStationId"
                  type="number"
                  variant="outlined"
                  error={Boolean(
                    errors.departureStationId && touched.departureStationId
                  )}
                  helperText={<ErrorMessage name="departureStationId" />}
                />
              </Box>
              <Box className="formItem">
                <Typography className="formTitle">
                  Return station id:
                </Typography>
                <Field
                  className="formField"
                  as={TextField}
                  id="number"
                  name="returnStationId"
                  type="number"
                  variant="outlined"
                  error={Boolean(
                    errors.returnStationId && touched.returnStationId
                  )}
                  helperText={<ErrorMessage name="returnStationId" />}
                />
              </Box>
              <Box className="formItem">
                <Typography className="formTitle">Cover distance:</Typography>
                <Field
                  className="formField"
                  as={TextField}
                  id="number"
                  name="coveredDistance"
                  type="number"
                  variant="outlined"
                  error={Boolean(
                    errors.coveredDistance && touched.coveredDistance
                  )}
                  helperText={<ErrorMessage name="coveredDistance" />}
                />
              </Box>
              <Box className="formItem">
                <Typography className="formTitle">Duration:</Typography>
                <Field
                  className="formField"
                  as={TextField}
                  id="number"
                  name="duration"
                  type="number"
                  variant="outlined"
                  error={Boolean(errors.duration && touched.duration)}
                  helperText={<ErrorMessage name="duration" />}
                />
              </Box>
              <Box className="formItem">
                <Typography className="formTitle">
                  Departure station name:
                </Typography>
                <Field
                  className="formField"
                  as={TextField}
                  id="text"
                  name="departureStationName"
                  variant="outlined"
                  error={Boolean(
                    errors.departureStationName && touched.departureStationName
                  )}
                  helperText={<ErrorMessage name="departureStationName" />}
                />
              </Box>
              <Box className="formItem">
                <Typography className="formTitle">
                  Return station name:
                </Typography>
                <Field
                  className="formField"
                  as={TextField}
                  id="text"
                  name="returnStationName"
                  variant="outlined"
                  error={Boolean(
                    errors.returnStationName && touched.returnStationName
                  )}
                  helperText={<ErrorMessage name="returnStationName" />}
                />
              </Box>

              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" variant="filled">
            A journey is added
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
