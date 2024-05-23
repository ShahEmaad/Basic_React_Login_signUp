import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));

  if (!loggedInUser) {
    navigate("/login");
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }

  // Assume users is an array of user objects
  const users = JSON.parse(localStorage.getItem("users")) || []; // Fetch or provide users data here

  return (
    <section className="vh-100" style={{ background: "linear-gradient(135deg, #b3cde0 0%, #f0f8ff 100%)" }}>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "linear-gradient(135deg, #333333 0%, #555555 100%)" }}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">User Page</span>
          <div className="d-flex">
            <button onClick={handleLogout} className="btn btn-danger me-2">Logout</button>
            <button onClick={() => navigate("/")} className="btn btn-primary">Homepage</button>
          </div>
        </div>
      </nav>
      <div className="container py-5">
        <div className="row">
          {users.map(user => (
            <div key={user.id} className="col-md-4 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius pretium sapien.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UserPage;