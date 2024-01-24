import React, { useContext, useState } from "react";
import { VStack, Button, Text, Input, Box, useToast } from "@chakra-ui/react";
import { Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {tokenContext} from "../context";
const Login = () => {
  const { token, setToken } = useContext(tokenContext);
  const toast = useToast();
  const navigate = useNavigate();
  const initialValues = {
    userName: "",
    password: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
  });
  const onSubmit = async (values, opt) => {
    setLoading(true)
    const res = await axios.post("/api/v1/admin/login", values);
    if (res) {
  
      opt.resetForm();
      setToken(res.data.data.accessToken);
      const msg = res.data.data.message;
      toast({
        title: "Logged In",
        description: msg,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        
      });
      navigate("/");
      setLoading(false)
    }
   
  };
  const [loading,setLoading]=useState(false)
  return (
    <>
      <VStack>
        <VStack
          mt={78}
          width={["100%", "60%"]}
          justifyContent={"center"}
          height={"80vh"}
        >
          <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={initialValues}
          >
            <Form style={{ width: "100%" }}>
              <Box
                flexDir={"column"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={5}
              >
                <Field name="userName">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Input
                          placeholder="enter username"
                          {...field}
                          name="userName"
                          width={"80%"}
                          fontSize={"16px"}
                        />
                      </>
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="userName"
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
                <Field name="password">
                  {(props) => {
                    const { form, meta, field } = props;
                    return (
                      <>
                        <Input
                          placeholder="enter password"
                          {...field}
                          name="password"
                          width={"80%"}
                          fontSize={"16px"}
                          type="password"
                        />
                      </>
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Button type="submit" width={"50%"} bg={"tomato"} isLoading={loading} loadingText="logging">
                  Login As Admin
                </Button>
              </Box>
            </Form>
          </Formik>
        </VStack>
      </VStack>
    </>
  );
};

export default Login;
