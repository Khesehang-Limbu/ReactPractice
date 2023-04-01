import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/* {userIsRegistered ? <Form user = "Login" status="registered"/> : <Form user = "Register"/>} */}
      <Form status={userIsRegistered}/>
    </div>
  );
}

export default App;
