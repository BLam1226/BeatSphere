import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, Link } from "react-router-dom";
import globe from "/src/assets/local_1.svg";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Login(props) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="img-container">
        <section>
          <div className="row justify-space-between-md">
            <div className="login-card w-full max-w-md mx-auto mt-10">
              <div className="globe">
                <img src={globe} />
                <p className="beat">
                  <span className="f1">B</span>
                  <span className="f2">E</span>
                  <span className="f3">A</span>
                  <span className="f4">T</span>
                  <span className="f5">S</span>
                  <span className="f6">P</span>
                  <span className="f7">H</span>
                  <span className="f8">E</span>
                  <span className="f9">R</span>
                  <span className="f10">E</span>
                </p>
              </div>
              <h2 className="page-title font-semibold text-lg mb-6 text-center text-4xl font-bold subpixel-antialiased">
                LOGIN
              </h2>
              {error && (
                <div className=" error my-3 p-3 bg-danger text-red">
                  {error.message}
                </div>
              )}
              {data ? (
                <Navigate to="/"></Navigate>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="form login-form mt-0 mb-4 box-sizing: content-box"
                >
                  <div className="form-group bg-gradient-to-r from-blue-500 to-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-2">
                    <input
                      className="form-input"
                      placeholder="Email"
                      name="email"
                      type="email"
                      defaultValue={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group bg-gradient-to-r from-blue-400 to-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      defaultValue={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group bg-gradient-to-r from-blue-300 to-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <button className="btn btn-primary" type="submit">
                      Login
                    </button>
                    <a href="/Signup">Sign Up?</a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
