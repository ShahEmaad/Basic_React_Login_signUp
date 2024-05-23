import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedIn")));
  const [loggedInTime, setLoggedInTime] = useState(new Date(JSON.parse(localStorage.getItem("loggedInTime"))));

  useEffect(() => {
    const interval = setInterval(() => {
      setLoggedInTime(new Date(JSON.parse(localStorage.getItem("loggedInTime"))));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInTime");
    setLoggedInUser(null);
    navigate("/login");
  }

  return (
    <section className="vh-100" style={{ background: "linear-gradient(135deg, #b3cde0 0%, #f0f8ff 100%)" }}>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "linear-gradient(135deg, #333333 0%, #555555 100%)" }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Home Page</span>
          <div className="d-flex">
            {loggedInUser ? (
              <>
                <button onClick={handleLogout} className="btn btn-danger me-2">Logout</button>
                <button onClick={() => navigate("/users")} className="btn btn-primary">User Page</button>
              </>
            ) : (
              <button onClick={() => navigate("/login")} className="btn btn-primary">Login</button>
            )}
          </div>
        </div>
      </nav>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                {loggedInUser ? (
                  <>
                    <h5 className="card-title">Welcome, {loggedInUser.name}!</h5>
                    <p className="card-text">You have been logged in for {calculateLoggedInTime(loggedInTime)}</p>
                  </>
                ) : (
                  <h5 className="card-title">Please login to continue</h5>
                )}
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius pretium sapien.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Function to calculate the time the user has been logged in
const calculateLoggedInTime = (loggedInTime) => {
  const currentTime = new Date();
  const difference = currentTime.getTime() - loggedInTime.getTime();
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
}

export default Home;
