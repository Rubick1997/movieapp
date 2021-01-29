import React from "react";
import { Navbar, Button,Row,Col,Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFilm,
	faSignInAlt,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
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
			<Container>
				<Row>
					<Col>
						<h1 className='title'>
							Movie search <FontAwesomeIcon icon={faFilm} />
						</h1>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default Header;
