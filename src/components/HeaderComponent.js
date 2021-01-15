import React from "react";
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Label,
	FormGroup,
	Input,
	Form,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faSignInAlt, faUserPlus, } from "@fortawesome/free-solid-svg-icons";
function Header() {
	return (
		<React.Fragment>
			<Navbar dark expand='md'>
				<span className='navbar-text ml-auto'>
					<ul className='navbar-nav ml-auto mt-2'>
						<Button className='button' outline>
							<FontAwesomeIcon icon={faSignInAlt} /> Login
						</Button>
						<Button className='button' outline>
							<FontAwesomeIcon icon={faUserPlus} /> Register
						</Button>
					</ul>
				</span>
			</Navbar>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h1 className='title'>
							Movie search <FontAwesomeIcon icon={faFilm} />
						</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;
