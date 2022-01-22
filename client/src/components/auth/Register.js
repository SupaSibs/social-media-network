import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";
//Components
import Alert from "../layout/Alert";
//Actions
import { setAlert } from "../../actions/alert";
let minLength = 6;
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const { name, email, password, password2 } = formData;
    const onChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log("Passwords Do Not Match");
            setAlert("Passwords Do Not Match !", "danger");
        }
        else {
            /* axios.post('/register', body: {
            name: name,
            email: email,
            password: password,
            password2: password2
            }) */
            console.log("Register Success");
        }
    };
    return (_jsxs(Fragment, { children: [_jsx(Alert, {}, void 0), _jsxs("section", Object.assign({ className: "register" }, { children: [_jsx("h1", { children: "Register" }, void 0), _jsx("p", { children: "Create Your Account" }, void 0), _jsxs("form", Object.assign({ className: "register-form", onSubmit: (e) => onSubmit(e) }, { children: [_jsx("div", Object.assign({ className: "form-item" }, { children: _jsx("input", { type: "text", placeholder: "Name", name: "name", onChange: (e) => onChange(e), required: true }, void 0) }), void 0), _jsx("div", Object.assign({ className: "form-item" }, { children: _jsx("input", { type: "email", placeholder: "Email Adress", name: "email", onChange: (e) => onChange(e), required: true }, void 0) }), void 0), _jsx("div", Object.assign({ className: "form-item" }, { children: _jsx("input", { type: "password", placeholder: "Password", name: "password", minLength: minLength, onChange: (e) => onChange(e), required: true }, void 0) }), void 0), _jsx("div", Object.assign({ className: "form-item" }, { children: _jsx("input", { type: "password", placeholder: "Confirm Password", name: "password2", minLength: minLength, onChange: (e) => onChange(e), required: true }, void 0) }), void 0), _jsx("input", { type: "submit", className: "", value: "Register" }, void 0)] }), void 0), _jsxs("p", { children: ["Already Have an Account? ", _jsx(Link, Object.assign({ to: "/login" }, { children: "Login" }), void 0)] }, void 0)] }), void 0)] }, void 0));
};
export default connect()(Register);
