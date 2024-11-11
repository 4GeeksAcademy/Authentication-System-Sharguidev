import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./../../styles/navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./../../styles/navbar.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Sharnav = () => {

	const { actions, store } = useContext(Context);
	const navigate = useNavigate();

	const logout = async () => {
		let resp = await actions.logout();
		if (resp) {
			navigate("/login");
			toast.success("Logged out successfully 🎉");
		}
	};


	return (


		<Navbar expand="lg" className="bg-body-tertiary py-3" style={{ fontFamily: "DynaPuff", fontSize: "18px" }}>
			<Container className="container-navbar">
				<Navbar.Brand href="/">
					<img
						alt=""
						src="https://github.com/4GeeksAcademy/Authentication-System-Sharguidev/blob/main/src/front/img/Sharguidev_p.png?raw=true"
						width="150"
						height="50"
						className="d-inline-block align-top"
					/>{' '}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{store.token && (
							<button className="btn" onClick={() => logout()}>Logout</button>
							// <Nav.Link href="/" onClick={() => actions.logout()}>Let's Go Out</Nav.Link>
						)}
						{!store.token && (

							<Nav.Link href="/login" >Let's Login</Nav.Link>
						)}
						{store.token && (
							<Nav.Link href="/">Register an Employee</Nav.Link>
						)}
						{!store.token && (

							<Nav.Link href="/">Let's Register</Nav.Link>
						)}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);




};




