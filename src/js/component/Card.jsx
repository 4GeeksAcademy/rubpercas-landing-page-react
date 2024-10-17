import React from "react";
import propTypes from "prop-types";

const Card = ({ imgSrc, title, description }) => {
	return (
		<div className="card p-0 d-flex flex-column align-items-center justify-content-center rounded-1 m-1" style={{ width: '18rem' }}>
			<img src={imgSrc} className="card-img-top rounded-1" alt="..." />
			<div className="card-body d-flex flex-column align-items-center justify-content-center">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">Find Out More!</a>
				</div>
			</div>
		</div>

	)
};

export default Card;

Card.propTypes = {
	imgSrc: propTypes.string,
	title: propTypes.string,
	description: propTypes.string
}