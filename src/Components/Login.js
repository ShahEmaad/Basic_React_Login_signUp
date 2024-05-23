import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });
  
  const { email, password } = input;
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  
  // Retrieve list of users from local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  // Find the user with the provided email
  const user = users.find(user => user.email === email);
  
  if (user) {
    // If user found, check password
    if (password === user.password) {
      localStorage.setItem("loggedIn",JSON.stringify(user))
      navigate("/");
    } else {
      alert("Wrong Password");
    }
  } else {
    alert("User not found");
  }
}


  const handleRegisterClick = () => {
    navigate("/register");
  }

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
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <FontAwesomeIcon
                        icon={faGear}
                        className="fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      />
                      <span className="h1 fw-bold mb-0">Logo</span>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Sign into your account
                    </h5>
                    <form onSubmit={handleLogin}>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          name="email"
                          value={email}
                          onChange={(ev) => setInput({ ...input, [ev.target.name]: ev.target.value })}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          name="password"
                          value={password}
                          onChange={(ev) => setInput({ ...input, [ev.target.name]: ev.target.value })}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?{" "}
                      <button
                        onClick={handleRegisterClick}
                        className="btn btn-link p-0"
                        style={{ color: "#393f81", textDecoration: "none" }}
                      >
                        SignUp
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

export default Login;
