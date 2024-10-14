import React, { useEffect } from "react";
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Input,
  Label,
  Form,
  FormFeedback,
} from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSignupUserMutation } from "../../ReduxStore/rtk";
import { useNavigate } from "react-router-dom";
import PageLoader from "../../Components/Common/PageLoader";
//import images
import signupBg from "../../assets/images/Images-Maestro/signup-bg.png";

const Register = () => {
  const history = useNavigate();
  const [addUser, response] = useSignupUserMutation();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      Name: "",
      Surname: "",
      Email: "",
      Password: "",
      Type: "",
    },
    validationSchema: Yup.object({
      Email: Yup.string().required("Please Enter Your Email"),
      Name: Yup.string().required("Please Enter Your "),
      Surname: Yup.string().required("Please Enter Your Last Name"),
      Password: Yup.string()
        .required("Please enter your Password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must contain at least 8 characters, one alphabet, one number, and one special character"
        ),
      Type: Yup.string().required("Please select your role"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password")], "Passwords do not match")
        .required("Please confirm your Password"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("ValuesOfRegister", values);
      const obj = {
        Username: values.Email,
        ...values,
      };
      resetForm();
      addData(obj);
    },
  });
  const addData = async (val) => {
    try {
      await addUser(val);
    } catch (error) {
      console.log("error:", error);
    }
  };
  console.log("Response:", response && response);
  document.title = "Register | Young-Maestro";

  const authPageStyle = {
    backgroundImage: `url(${signupBg})`,
    backgroundSize: "cover", // Ensures the image covers the container
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents image from repeating
  };
  useEffect(() => {
    if (response && response?.isSuccess) {
      toast(response && response?.data, {
        position: "top-right",
        hideProgressBar: false,
        className: "bg-success text-white",
        progress: undefined,
        toastId: "",
        // onClose: () => {
        //   history("/login");
        // },
      });
    } else if (response && response?.isError) {
      toast(response && response?.error?.data, {
        position: "top-right",
        hideProgressBar: false,
        className: "bg-danger text-white",
        progress: undefined,
        toastId: "",
      });
    }
  }, [response]);
  return (
    <React.Fragment>
      <ToastContainer autoClose={2000} />
      {(response && response?.isLoading) || response?.isFetching ? (
        <PageLoader />
      ) : null}
      <div
        style={authPageStyle}
        className="auth-page-content vh-100 d-flex align-items-center justify-content-center"
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={11} lg={8} xl={8}>
              <Card className="mt-4 bg-transparent shadow-none">
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h1 className="text-white display-4 fw-extrabold">
                      REGISTER
                    </h1>
                  </div>
                  <div className="p-2 mt-4">
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      className="needs-validation"
                      action="#"
                    >
                      <div className="mb-3">
                        <Row className="justify-content-between align-items-center">
                          <Col md={12} lg={6} xl={6}>
                            <Label
                              htmlFor="Name"
                              className="form-label text-white"
                            >
                              Name
                              <span className="text-danger">*</span>
                            </Label>
                            <Input
                              id="Name"
                              name="Name"
                              className="form-control"
                              placeholder="Enter "
                              type="text"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.Name || ""}
                              invalid={
                                validation.touched.Name &&
                                validation.errors.Name
                                  ? true
                                  : false
                              }
                              style={{
                                borderRadius: "50px",
                                backgroundColor: "RGB(193,227,228)",
                                borderColor: "#55b5da",
                                borderWidth: "2px",
                                color: "rgb(0 0 0 / 50%)",
                              }}
                            />
                            {validation.touched.Name &&
                            validation.errors.Name ? (
                              <FormFeedback type="invalid">
                                <div className="bg-danger-subtle mx-2 rounded-pill px-2">
                                  {validation.errors.Name}
                                </div>
                              </FormFeedback>
                            ) : null}
                          </Col>
                          <Col md={12} lg={6} xl={6}>
                            <Label
                              htmlFor="Surname"
                              className="form-label text-white"
                            >
                              Surname <span className="text-danger">*</span>
                            </Label>
                            <Input
                              id="Surname"
                              name="Surname"
                              className="form-control"
                              placeholder="Enter Surname"
                              type="text"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.Surname || ""}
                              invalid={
                                validation.touched.Surname &&
                                validation.errors.Surname
                                  ? true
                                  : false
                              }
                              style={{
                                borderRadius: "50px",
                                backgroundColor: "RGB(193,227,228)",
                                borderColor: "#55b5da",
                                borderWidth: "2px",
                                color: "rgb(0 0 0 / 50%)",
                              }}
                            />
                            {validation.touched.Surname &&
                            validation.errors.Surname ? (
                              <FormFeedback type="invalid">
                                <div>{validation.errors.Surname}</div>
                              </FormFeedback>
                            ) : null}
                          </Col>
                        </Row>
                      </div>

                      <div className="mb-3">
                        <Label
                          htmlFor="Email"
                          className="form-label text-white"
                        >
                          Email<span className="text-danger">*</span>
                        </Label>
                        <Input
                          id="Email"
                          name="Email"
                          className="form-control"
                          placeholder="Enter Email address"
                          type="Email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.Email || ""}
                          invalid={
                            validation.touched.Email && validation.errors.Email
                              ? true
                              : false
                          }
                          style={{
                            borderRadius: "50px",
                            backgroundColor: "RGB(193,227,228)",
                            borderColor: "#55b5da",
                            borderWidth: "2px",
                            color: "rgb(0 0 0 / 50%)",
                          }}
                        />
                        {validation.touched.Email && validation.errors.Email ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.Email}</div>
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label
                          htmlFor="userPassword"
                          className="form-label text-white"
                        >
                          Password <span className="text-danger">*</span>
                        </Label>
                        <Input
                          name="Password"
                          type="Password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.Password || ""}
                          invalid={
                            validation.touched.Password &&
                            validation.errors.Password
                              ? true
                              : false
                          }
                          style={{
                            borderRadius: "50px",
                            backgroundColor: "RGB(193,227,228)",
                            borderColor: "#55b5da",
                            borderWidth: "2px",
                            color: "rgb(0 0 0 / 50%)",
                          }}
                        />
                        {validation.touched.Password &&
                        validation.errors.Password ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.Password}</div>
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label
                          htmlFor="Confirm Password"
                          className="form-label text-white"
                        >
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </Label>
                        <Input
                          name="ConfirmPassword"
                          type="Password"
                          placeholder="Confirm Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.ConfirmPassword || ""}
                          invalid={
                            validation.touched.ConfirmPassword &&
                            validation.errors.ConfirmPassword
                              ? true
                              : false
                          }
                          style={{
                            borderRadius: "50px",
                            backgroundColor: "RGB(193,227,228)",
                            borderColor: "#55b5da",
                            borderWidth: "2px",
                            color: "rgb(0 0 0 / 50%)",
                          }}
                        />
                        {validation.touched.ConfirmPassword &&
                        validation.errors.ConfirmPassword ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.ConfirmPassword}</div>
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label htmlFor="Type" className="form-label text-white">
                          User Type <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="select"
                          name="Type"
                          id="Type"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.Type || ""}
                          invalid={
                            validation.touched.Type && validation.errors.Type
                              ? true
                              : false
                          }
                          style={{
                            borderRadius: "50px",
                            backgroundColor: "RGB(193,227,228)",
                            borderColor: "#55b5da",
                            borderWidth: "2px",
                            color: "rgb(0 0 0 / 50%)",
                          }}
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="zerotosix">Parent 0-6</option>
                          <option value="sixto-eleven">6-11</option>
                          <option value="twelvetoforteen">12-14</option>
                          <option value="teacher">Teacher</option>
                          <option value="organization">Organization</option>
                        </Input>
                        {validation.touched.Type && validation.errors.Type ? (
                          <FormFeedback type="invalid">
                            <div>{validation.errors.Type}</div>
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mt-4 text-center">
                        <button
                          className="btn w-uto"
                          type="submit"
                          style={{
                            background: "white",
                            color: "#59b130",
                            borderRadius: "35px",
                            padding: "0.5rem 2rem",
                            border: "0",
                          }}
                        >
                          <h4 className="text-success mb-0 fw-extrabold">
                            Enter
                          </h4>
                        </button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;
