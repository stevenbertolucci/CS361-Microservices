import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout, user } = useAuth0();

let navigate = useNavigate();
const goToHomePage = () => {
  let path = "/";
  navigate(path);
}

  return (
    <div>
    <p className="App-style">Are you sure you want to Log Out, {user.name}? </p>
    <button className="App-button" onClick={() => logout({ returnTo: window.location.origin })}>
      Yes, log me out
    </button>
    <button className="App-button2" onClick= {goToHomePage}>
      No, take me back to Home Page
    </button>
    </div>
  );
};

export default LogoutButton;