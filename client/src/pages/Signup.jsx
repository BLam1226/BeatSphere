import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  // States for registration
  const history = useNavigate();
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handling the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { username, email, password };
    // send the username and password to the server
    try {
      // prettier-ignore
      await axios.post("https://beatsphere.netlify.app/", { user })
        .then(res => {
          if ((res.data == "exists")) {
            alert("User already exists")
          } else if (res.data == "notexists") {
            history("/home", { state: { id: username } });
          }
        })
        .catch (event=> {
          alert("wrong details")
          console.log(event)
        })
    } catch (event) {
      console.log(event);
    }
  };

  return (
    <div>
      <div className="img-container">
        <section>
          <div className="row justify-space-between-md">
            <div className="login-card w-full max-w-md mx-auto mt-10">
              <h2 className="page-title font-semibold text-lg mb-6 text-center text-4xl font-bold subpixel-antialiased">
                Sign Up
              </h2>

              <form className="form login-form mt-0 mb-4 box-sizing: content-box">
                <div className="form-group bg-gradient-to-r from-blue-500 to-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-2">
                  <input
                    className="form-input"
                    type="text"
                    id="email-signup"
                    required
                    value={email}
                    placeholder="EMAIL"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group bg-gradient-to-r from-blue-400 to-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                  <input
                    className="form-input"
                    type="text"
                    id="username-signup"
                    required
                    value={username}
                    placeholder="USERNAME"
                    onChange={(event) => {
                      setuserName(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group bg-gradient-to-r from-blue-400 to-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                  <input
                    className="form-input"
                    type="password"
                    id="password-signup"
                    required
                    value={password}
                    placeholder="PASSWORD"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group bg-gradient-to-r from-blue-300 to-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary"
                    type="submit"
                  >
                    <a>Sign Up</a>
                  </button>
                  <a href="/">Back To Login?</a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
