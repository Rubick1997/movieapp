import React from "react";
import {
	Row,
	Col,
	Jumbotron,
	Card,
	CardBody,
	CardTitle,
	CardText,
} from "reactstrap";

function ShowCard({ tvShow }) {
	return (
		<Row>
			<Jumbotron>
				<Card>
					<CardBody>
						<Row>
							<Col>
								<img
									id='poster'
									src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${tvShow.backdrop_path}`}
									alt={tvShow.name + "poster"}
								/>
							</Col>
							<Col>
								<CardTitle>
									<h3>{tvShow.name}</h3>
								</CardTitle>
								<CardText>
									<p>
										<small>FIRST AIR DATE: {tvShow.first_air_date}</small>
									</p>
								</CardText>
								<Row>
									<Col xs='6'>
										<CardText>
											<p>
												<small>RATING:{tvShow.vote_average}</small>
											</p>
										</CardText>
									</Col>
								</Row>
								<CardText>
									<p>{tvShow.overview}</p>
								</CardText>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Jumbotron>
		</Row>
	);
}

export default ShowCard;
