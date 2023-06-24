import '../components-styles/About.css';
import { withErrorBoundary } from './withErrorBoundary.jsx';
import Profile from '../assets/profile.jpeg';

const About = () => {
	return(
		<div className="about-wrapper">
			<h3 className="about-title">About me</h3>
			<div className="image-box">
				<img src={Profile} alt="profile" height={200} width={200} />
			</div>
			<h4>Hi, I'm a front-end developer</h4>
			<p>Dedicated to building fast, responsive and scalable webpages, websites and web-apps.</p>
		</div>
		);
}

const wrappedComponent = withErrorBoundary(About);

export { About };