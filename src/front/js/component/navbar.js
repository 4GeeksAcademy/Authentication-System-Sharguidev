import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid py-1">
				<Link to="/">
					<span className="navbar-brand mb-0">
						<img alt="imagen" src="https://github.com/4GeeksAcademy/Authentication-System-Sharguidev/blob/main/src/front/img/Sharguidev_p.png?raw=true" style={{ width: "30px", height: "24px" }} className="d-inline-block align-text-top" />
					</span>

				</Link>
				<div className="ml-auto">

				</div>
			</div>
		</nav>
	);
};
