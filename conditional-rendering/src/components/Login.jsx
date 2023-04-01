import React from "react";
import Input from "./Input";

function Login(){
    return (
        <form className="form">
            <h1>Hello!</h1>
            <Input inputType="text" textPlaceholder="Username"/>
            <Input inputType="text" textPlaceholder="username" />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;