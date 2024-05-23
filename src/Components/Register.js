import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();
  
  // Retrieve existing users from local storage
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
  // Add the new user to the list
  const updatedUsers = [...existingUsers, input];
  
  // Save the updated list of users to local storage
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  
  // Navigate to the login page
  navigate("/login");
}


  const { name, email, password } = input;

  return (
    <section className="vh-100" style={{ backgroundColor: "#d3d3d3" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <div
                    className="h-100"
                    style={{
                      background: "linear-gradient(45deg, #000080 0%, #0000A0 100%)",
                      borderRadius: "1rem 0 0 1rem"
                    }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-2 pb-1">
                        <FontAwesomeIcon
                          icon={faUserPlus}
                          className="fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">Sign Up</span>
                      </div>
                      <h5
                        className="fw-normal mb-2 pb-1"
                        style={{ letterSpacing: 1 }}
                      >
                        Create your account
                      </h5>
                      <div data-mdb-input-init="" className="form-outline mb-3">
                        <input
                          type="text"
                          id="formName"
                          name="name"
                          value={name}
                          onChange={(ev) => setInput({ ...input, [ev.target.name]: ev.target.value })}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="formName">
                          Name
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-3">
                        <input
                          type="email"
                          id="formEmail"
                          name="email"
                          value={email}
                          onChange={(ev) => setInput({ ...input, [ev.target.name]: ev.target.value })}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="formEmail">
                          Email address
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-3">
                        <input
                          type="password"
                          id="formPassword"
                          name="password"
                          value={password}
                          onChange={(ev) => setInput({ ...input, [ev.target.name]: ev.target.value })}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="formPassword">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-3">
                        <button
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                    <p className="mb-4 pb-lg-1" style={{ color: "#393f81" }}>
                      Already have an account?{" "}
                      <button
                        onClick={() => navigate("/login")}
                        className="btn btn-link p-0"
                        style={{ color: "#393f81", textDecoration: "none" }}
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
