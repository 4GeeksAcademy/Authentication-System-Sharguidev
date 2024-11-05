import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/footer.css";

export function Footer() {
	return (
		<div className="container-footer mt-5">
			<footer className="pie-pagina">
				<div className="grupo-1">
					<div className="row">
						<div className="col-md-8">
							<div className="box">
								<figure className="imagen">
									<a href="#">
										<img alt="imagen" src="https://github.com/4GeeksAcademy/Authentication-System-Sharguidev/blob/main/src/front/img/Sharguidev_s.png?raw=true" />
									</a>
								</figure>
							</div>

						</div>

					</div>
					<div className="box">
						<h2 className="Aus">About Us</h2>
						<p>
							We are a team of developers who are passionate about creating innovative solutions for our clients. Making their businesses and lives easier.
							Doing <br />
							great work is what we do best.
						</p>
					</div>
					<div className="box">
						<h2 className="Fus">Follow Us</h2>
						<div className="red-social">
							<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-facebook"></i>
							</a>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
								<i className="fa-brands fa-twitter"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="grupo-2">
					<small>&copy; 2024 <b>Sharguidev</b> - Todos los derechos reservados.</small>
				</div>
			</footer>
		</div>
	);
}
