import React, { useState } from "react";

import { Link } from "react-router-dom";
import globe from "/src/assets/local_1.svg";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Signup() {
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
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
                Sign Up
              </h2>
              {data ? (
                <p>
                  Success! You may now head{" "}
                  <Link to="/Fakepage">back to the homepage.</Link>
                </p>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="form login-form mt-0 mb-4 box-sizing: content-box"
                >
                  <div className="form-group bg-gradient-to-r from-blue-500 to-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-2">
                    <input
                      className="form-input"
                      placeholder="Username"
                      name="username"
                      type="username"
                      defaultValue={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group bg-gradient-to-r from-blue-400 to-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
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
                      placeholder="Your password"
                      name="password"
                      type="password"
                      defaultValue={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group bg-gradient-to-r from-blue-300 to-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <button className="btn btn-primary" type="submit">
                      <a>Sign Up</a>
                    </button>

                    <a href="/">Back To Login?</a>
                  </div>
                </form>
              )}

              {error && (
                <div className="error my-3 p-3 bg-danger color-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
