import React from "react";
import Card from "./Card";
import Jumbo from "./Jumbotron";
import NavBar from "./NavBar";
import Footer from "./Footer";
import cardInfo from "./info";


const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container-fluid">
				<Jumbo />
				<div className="container-fluid mt-4 mb-4">
					<div className="row d-flex align-items-center justify-content-center">

						{cardInfo.map((infoCard) => {						
							return <Card {...infoCard} key = {infoCard.id}/>;
						})}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Home;

