import React, { Component } from 'react';
import { Formik } from 'formik';


class Auth extends Component {
    state = {
        authMode: "Sign Up"
    }
    switchModeHandler = () => {
        this.setState({
            authMode: this.state.authMode === "Sign Up" ? "Login" : "Sign Up"
        })
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={
                        {
                            email: "", password: "", passConfirm: "",
                        }
                    }
                    onSubmit={
                        (values) => {
                            console.log(values);
                        }
                    }
                    validate={
                        (values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required'
                            } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (values.password.length < 6) {
                                errors.password = 'Password must be at least 6 character';
                            }

                            if (this.state.authMode === "Sign Up") {
                                if (!values.passConfirm) {
                                    errors.passConfirm = 'Required';
                                } else if (values.password !== values.passConfirm) {
                                    errors.passConfirm = 'Confirm password not match';
                                }
                            }
                            return errors;
                        }
                    }
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{ border: "1px grey solid", padding: "15px", borderRadius: "7px" }}>
                            <button style={{ width: "100%", backgroundColor: "#D70F64", color: "white" }} className="btn btn-lg" onClick={this.switchModeHandler}>Switch  to {this.state.authMode === "Sign Up" ? "Login" : "Sign Up"}</button><br /><br />
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <span className="text-danger">{errors.email}</span>
                                <br />
                                <input
                                    name="password"
                                    placeholder="Enter login password"
                                    className="form-control"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <span className="text-danger">{errors.password}</span>
                                <br />
                                {this.state.authMode === "Sign Up" ?
                                    <div>
                                        <input
                                            name="passConfirm"
                                            placeholder="Enter confirm password"
                                            className="form-control"
                                            type="password"
                                            value={values.passConfirm}
                                            onChange={handleChange}
                                        />
                                        <span className="text-danger">{errors.passConfirm}</span>
                                        <br />
                                    </div>
                                    : null}
                                <button type="submit" className="btn btn-success">{this.state.authMode === "Sign Up" ? "Sign Up" : "Login"}</button>
                            </form>
                        </div>
                    )}
                </Formik>
            </div >
        )
    }
}

export default Auth;