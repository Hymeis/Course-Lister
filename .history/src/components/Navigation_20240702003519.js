import React from "react";
import Button from "./Button";
import './styles/Navigation.css';
import Link from 'next/link'

function clickHandler() {

}
function Navigation() {
    return (
        <nav class="navbar">
                <Link href="/login">Login</Link>
                <a href="/about">About</a>
        </nav>
    )
}

export default Navigation;