import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./../../styles/navbar.css";
import "./../../styles/navbar.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Sharnav = () => {

	const { actions, store } = useContext(Context);
	const navigate = useNavigate();

	const logout = () => {
		actions.logout();
		navigate("/login");
		return;

	};


	return (

		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="#">Sharguidev</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto">
						{store.token && (
							<>
								<Link className="nav-link active" aria-current="page" to="#" onClick={() => logout()}>Logout</Link>
								<Link className="nav-link active" aria-current="page" to="/private">Register an Employee</Link>
							</>
						)}
						{!store.token && (
							<>
								<Link className="nav-link" to="/register">Let's Register</Link>
								<Link className="nav-link active" aria-current="page" to="/login">Let's Login</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}