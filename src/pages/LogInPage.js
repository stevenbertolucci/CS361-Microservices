import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogInPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <p>Please log in to authenticate before accessing The Directory.</p>
    <p className="App-p5">Tip: After clicking "Log In," choose "Continue with Google"</p>
    <button className="App-button" onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
}

export default LogInPage;