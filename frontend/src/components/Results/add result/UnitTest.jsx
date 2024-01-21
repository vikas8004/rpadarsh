import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { VStack, Box, Select, Input, Button } from "@chakra-ui/react";
import * as Yup from "yup";
const initialValues = {
  test: "",
  schoolName: "",
  year:"",
  rollno: "",
  hindi: "",
  english: "",
  math: "",
  science: "",
  socialStudy: "",
  sanskrit: "",
  computer: "",
  gk: "",
  drawing: "",
  pt: "",
};
const validationSchema = Yup.object({
  test: Yup.string().required("Select unit test"),
  schoolName: Yup.string().required("select the school"),
  year:Yup.string().required("Please select year"),
  rollno: Yup.number().required("roll no is required"),
  hindi: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("hindi number is required"),
  english: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("english number is required"),
  math: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("math number is required"),
  science: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("science number is required"),
  socialStudy: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("socialStudy number is required"),
  sanskrit: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("sanskrit number is required"),
  computer: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("computer number is required"),
  gk: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("gk number is required"),
  drawing: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("drawing number is required"),
  pt: Yup.number()
    .min(0, "number can not be negative")
    .max(50, "number can not be greater than 50")
    .required("pt number is required"),
});
const onSubmit = (values, opt) => {
  console.log(values);
  opt.resetForm();
};
const UnitTest = () => {
  return (
    <>
      <VStack>
        <VStack width={"90%"} marginTop={"78"}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form style={{ width: "80%" }}>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="test">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Select
                        placeholder="Select test"
                        {...field}
                        name="test"
                        width={"80%"}
                      >
                        <option value="unittest1">Unit test 1</option>
                        <option value="unittest2">Unit Test 2</option>
                        <option value="unittest3">Unit Test 3</option>
                      </Select>
                    );
                  }}
                </Field>
                <ErrorMessage name="test" component={"div"} className="error" />
              </Box>
              <Box
                flexDir={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <Field name="schoolName">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Select
                          placeholder="Select School"
                          {...field}
                          name="schoolName"
                          width={"80%"}
                          fontSize={"16px"}
                        >
                          <option value="rp adrash inter college">
                            RP Adarsh Inter College
                          </option>
                          <option value="rbmp convent school">
                            RBMP Convent School
                          </option>
                        </Select>
                      </>
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="schoolName"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDir={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <Field name="year">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Select
                          placeholder="Select Year"
                          {...field}
                          name="year"
                          width={"80%"}
                          fontSize={"16px"}
                        >
                          <option value="5023-5024">
                            5023-5024
                          </option>
                          {/* <option value="rbmp convent school">RBMP Convent School</option> */}
                        </Select>
                      </>
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="year"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="rollno">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="rollno"
                        {...field}
                        placeholder="Enter your roll no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="rollno"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="hindi">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="hindi"
                        {...field}
                        placeholder="Enter hindi no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="hindi"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="english">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="rollno"
                        {...field}
                        placeholder="Enter english no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="english"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="math">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="math"
                        {...field}
                        placeholder="Enter math no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="math" component={"div"} className="error" />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="science">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="science"
                        {...field}
                        placeholder="Enter science no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="science"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="socialStudy">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="socialStudy"
                        {...field}
                        placeholder="Enter sst no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="socialStudy"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="sanskrit">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="sanskrit"
                        {...field}
                        placeholder="Enter snaskrit no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="sanskrit"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="computer">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="computer"
                        {...field}
                        placeholder="Enter computer no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="computer"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="gk">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="gk"
                        {...field}
                        placeholder="Enter gk no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="gk" component={"div"} className="error" />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="drawing">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="drawing"
                        {...field}
                        placeholder="Enter drawing no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="drawing"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Field name="pt">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <Input
                        name="pt"
                        {...field}
                        placeholder="Enter pt no"
                        focusBorderColor="tomato"
                        width={"80%"}
                        type="number"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage name="pt" component={"div"} className="error" />
              </Box>
              <Box
                flexDirection={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={3}
              >
                <Button width={"60%"} type="submit">
                  Submit Form
                </Button>
               
              </Box>
            </Form>
          </Formik>
        </VStack>
      </VStack>
    </>
  );
};

export default UnitTest;
