import React from "react";
import Button from "./Button";
import './styles/Navigation.css';

function clickHandler() {

}
function Navigation() {
    return (
        <nav class="navbar">
                <a href="/login">Login</a>
                <a href="/about">About</a>
        </nav>
    )
}

export default Navigation;