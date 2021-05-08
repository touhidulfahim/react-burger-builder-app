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
                >
                    {(values, handleChange, handleSubmit) => (
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <br />
                                <input
                                    name="password"
                                    placeholder="Enter login password"
                                    className="form-control"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <br />
                                <input
                                    name="passConfirm"
                                    placeholder="Enter confirm password"
                                    className="form-control"
                                    value={values.passConfirm}
                                    onChange={handleChange}
                                />
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