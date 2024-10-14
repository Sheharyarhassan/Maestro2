import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Alert,
  Spinner,
} from "reactstrap";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginUser, socialLogin, resetLoginFlag } from "../../slices/thunks";

import { createSelector } from "reselect";
import loginBg from "../../assets/images/Images-Maestro/login-bg.png";
//import images

const Login = (props) => {
  const dispatch = useDispatch();

  const selectLayoutState = (state) => state;
  const loginpageData = createSelector(selectLayoutState, (state) => ({
    user: state.Account.user,
    error: state.Login.error,
    loading: state.Login.loading,
    errorMsg: state.Login.errorMsg,
  }));
  // Inside your component
  const { user, error, loading, errorMsg } = useSelector(loginpageData);

  const [userLogin, setUserLogin] = useState([]);
  const [passwordShow, setPasswordShow] = useState(false);

  useEffect(() => {
    if (user && user) {
      const updatedUserData =
        process.env.REACT_APP_DEFAULTAUTH === "firebase"
          ? user.multiFactor.user.email
          : user.email;
      const updatedUserPassword =
        process.env.REACT_APP_DEFAULTAUTH === "firebase"
          ? ""
          : user.confirm_password;
      setUserLogin({
        email: updatedUserData,
        password: updatedUserPassword,
      });
    }
  }, [user]);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: userLogin.email || "",
      password: userLogin.password || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    },
  });

  const signIn = (type) => {
    dispatch(socialLogin(type, props.router.navigate));
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //for facebook and google authentication
  const socialResponse = (type) => {
    signIn(type);
  };

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        dispatch(resetLoginFlag());
      }, 3000);
    }
  }, [dispatch, errorMsg]);
  document.title = "SignIn | Young-Maestro";

  const authPageStyle = {
    backgroundImage: `url(${loginBg})`,
    backgroundSize: "cover", // Ensures the image covers the container
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents image from repeating
  };
  return (
    <React.Fragment>
      <div
        style={authPageStyle}
        className="auth-page-content vh-100 d-flex align-items-center justify-content-center"
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="mt-4 bg-transparent shadow-none">
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h1 className="text-white display-4 fw-extrabold">LOGIN</h1>
                  </div>
                  {error && error ? (
                    <Alert color="danger"> {error} </Alert>
                  ) : null}
                  <div className="p-2 mt-4">
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      action="#"
                    >
                      <div className="mb-3">
                        <Input
                          name="email"
                          className="form-control text-center"
                          placeholder="ENTER EMAIL OR USERNAME..."
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                          style={{
                            borderRadius: "50px",
                            backgroundColor: "RGB(193,227,228)",
                            borderColor: "#55b5da",
                            borderWidth: "2px",
                            color: "rgb(0 0 0 / 50%)",
                            textAlign: "center",
                          }}
                        />
                        <style jsx>{`
                          .form-control::placeholder {
                            text-align: center;
                          }
                        `}</style>
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <Input
                            name="password"
                            value={validation.values.password || ""}
                            type={passwordShow ? "text" : "password"}
                            className="form-control pe-5 text-center"
                            placeholder="ENTER PASSWORD..."
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.password &&
                              validation.errors.password
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
                          {validation.touched.password &&
                          validation.errors.password ? (
                            <FormFeedback type="invalid">
                              {validation.errors.password}
                            </FormFeedback>
                          ) : null}
                        </div>
                      </div>
                      <div className="text-center">
                        <Link
                          to="/forgot-password"
                          className="text-white-50 fw-bold text-decoration-underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="mt-4 text-center">
                        <Button
                          color="success"
                          disabled={error ? null : loading ? true : false}
                          className="btn w-auto"
                          type="submit"
                          style={{
                            background: "white",
                            borderRadius: "35px",
                            padding: "0.5rem 2rem",
                            border: "0",
                          }}
                        >
                          {loading ? (
                            <Spinner size="sm" className="me-2">
                              {" "}
                              Loading...{" "}
                            </Spinner>
                          ) : null}
                          <h4 className="text-success mb-0 fw-extrabold">
                            ENTER
                          </h4>
                        </Button>
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

export default withRouter(Login);
