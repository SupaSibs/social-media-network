import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
//Components
import Alert from "../layout/Alert";
let minLength = 6;
const Login = () => {
    const [formData, setFormData] = useState({
        nameMail: "",
        password: "",
    });
    const { nameMail, password, } = formData;
    const onChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        /* axios.post('/login', body: {
        nameMail: nameMail,
        password: password
    
        }) */
        console.log("Login Success");
    };
    return (_jsxs(Fragment, { children: [_jsx(Alert, {}, void 0), _jsxs("section", Object.assign({ className: "register" }, { children: [_jsx("h1", { children: "Login" }, void 0), _jsx("p", { children: "Login To Your Account" }, void 0), _jsxs("form", Object.assign({ className: "register-form", onSubmit: (e) => onSubmit(e) }, { children: [_jsx("div", Object.assign({ className: "form-item" }, { children: _jsx("input", { type: "text", placeholder: "Name/Email", name: "name", onChange: (e) => onChange(e), required: true }, void 0) }), void 0), _jsx("div", Object.assign({ className: "form-item" }, { children: _jsx("input", { type: "password", placeholder: "Confirm Password", name: "password", minLength: minLength, onChange: (e) => onChange(e), required: true }, void 0) }), void 0), _jsx("input", { type: "submit", className: "", value: "Register" }, void 0)] }), void 0), _jsxs("p", { children: ["Don't Have an Account? ", _jsx(Link, Object.assign({ to: "/register" }, { children: "Register" }), void 0)] }, void 0)] }), void 0)] }, void 0));
};
export default Login;
