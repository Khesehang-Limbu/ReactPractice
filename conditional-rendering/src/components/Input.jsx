import React from "react";

function Login(props){
    return (
        <input type={props.inputType} placeholder={props.textPlaceholder} />
    );
}

export default Login;