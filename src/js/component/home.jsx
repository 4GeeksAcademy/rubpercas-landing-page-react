import React from "react";
import Card from "./Card";
import Jumbo from "./Jumbotron";
import NavBar from "./NavBar";
import Footer from "./Footer";



const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<Jumbo />
			<div className="container-fluid  mt-4 mb-4">
				<div className="row d-flex align-items-center justify-content-between">
					<Card
						title="Card 1"
						imgSrc="https://cdn.pixabay.com/photo/2019/02/08/17/57/cubes-3983666_1280.jpg" 
						description="Some testing text."/>
						
					<Card
						title="Card 2"
						imgSrc="https://cdn.pixabay.com/photo/2022/08/22/16/53/honey-bee-7404063_1280.jpg" 
						description="Some testing text too"/>
					<Card
						title="Card 3"
						imgSrc="https://cdn.pixabay.com/photo/2023/11/28/21/35/ural-owl-8418249_1280.jpg" 
						description="Also some testing text"/>
					<Card
						title="Card 4"
						imgSrc="https://cdn.pixabay.com/photo/2024/09/30/10/43/flowers-9085492_1280.jpg" 
						description="Maybe, some testing text?"/>
				</div>
			</div>
			<Footer />
		</div>

	)
}

export default Home;

