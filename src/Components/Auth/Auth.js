import React, { Component } from 'react';
import { Formik } from 'formik';


class Auth extends Component {
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

                            if (!values.passConfirm) {
                                errors.passConfirm = 'Required';
                            } else if (values.password !== values.passConfirm) {
                                errors.passConfirm = 'Confirm password not match';
                            }
                            return errors;
                        }
                    }
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{ border: "1px grey solid", padding: "15px", borderRadius: "7px" }}>
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
                                <button type="submit" className="btn btn-success btn-sm">Sign Up</button>
                            </form>
                        </div>
                    )}
                </Formik>
            </div >
        )
    }
}

export default Auth;