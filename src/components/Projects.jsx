import { useState, useEffect } from 'react';
import '../components-styles/Projects.css';
import slapomania from '../assets/in-game.png';
import start from '../assets/start.png';
import { withErrorBoundary } from './withErrorBoundary.jsx';

let	tracker = 1;

const moveX = (fn1, fn2, fn3, bool) => {
	bool? fn1(fn3, 0): fn2(fn3, 100); 			
}

const updateCarouselX = (fn, dist) => {
	let count = tracker + 1;
	fn(-(dist));
	tracker = count;
}

const setDefault = (fn, dist) => {
	fn(dist);
	tracker = 1;
}

const Projects = () => {
	const [xPos, setXpos] = useState(0);
	let style = {transform: `translateX(${xPos}%)`};

	const ownProjects = [{img: slapomania, alt: 'A javaScript game', name: 'Slapomania', href: 'https://slapomania.vercel.app'}, {img: start, alt: 'start game', name: 'Grand fisher', href: 'https://slapomania.vercel.app'},];

	let atLast = ownProjects.length/tracker == 1;	

	const Image = props => {
		return(
			<>
				<img 
					src={props.src} 
					alt={props.alt} 
				/> 
			</>
		);
	}

	const renderOwnProjects = ownProjects.map(({ img, alt, name, href }) => {
		return <div className="project-images" key={alt}>
				<Image src={img} alt={alt} />
				<a href={href}>
					<h3>{name}</h3>
				</a>
			</div>;
	});

	const clearCarouselLoad = (id) => {
		clearInterval(id);
	}

	useEffect(() => {
		const animateCarousel = setInterval(() => moveX(setDefault, updateCarouselX, setXpos, atLast),6000);	

		return () => {
			clearCarouselLoad(animateCarousel);
		}
	},[xPos]);

	return(
		<section className="project-wrapper">
			<h3>Projects</h3>
			<div className="own-projects">
				<div className="image-slider">
					<div className="image-carousel" style={style}>
					{renderOwnProjects}
					</div>
				</div>	
			</div> 
		</section>
		);
}

const wrappedComponent = withErrorBoundary(Projects);
 

export { Projects, moveX, setDefault, updateCarouselX };