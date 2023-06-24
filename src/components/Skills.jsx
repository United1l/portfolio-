import '../components-styles/Skills.css';
import html from '../assets/html-5.png';
import css from '../assets/css.png';
import js from '../assets/java-script.png';
import react from '../assets/react.png';
import { withErrorBoundary } from './withErrorBoundary.jsx';

const Skills = () => {
	const logos = [{img: html, lang: 'HTML'}, 
		{img: css, lang: 'CSS'}, 
		{img: js, lang: 'JS'}, 
		{img: react, lang: 'React'}, 
		];

	const renderLogos = logos.map(({ img, lang }) => {
		let logo = <div key={lang}><img src={img} alt={lang}/></div>;
		return logo;
	});

	return(
		<section className="skills-wrapper">
			<h3>Skills</h3>
			<div className="skills">
				{renderLogos}
			</div>
		</section>
		);
}

const wrappedComponent = withErrorBoundary(Skills);

export { Skills };