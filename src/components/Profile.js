import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h3 className="App-h3"> Logged in as: {user.name}</h3>
        <p className="App-p4">{user.email}</p>
      </div>
    )
  );
};

export default Profile;