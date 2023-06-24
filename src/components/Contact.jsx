import '../components-styles/Contact.css';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import { withErrorBoundary } from './withErrorBoundary.jsx';

const Contact = () => {
	const icons = [
		{src: linkedin,
		 alt: 'linkedin icon',
		 key: 8, //Number of letters in media name
		 id: 'linkedin',
		 href: 'linkedin.com',	
		}, 
		{src: instagram,
		 alt: 'instagram icon',
		 key: 9,
		 id: 'instagram',
		 href: 'instagram.com/michaelasare._',
		}, 
		{src: twitter,
		 alt: 'twitter icon',
		 key: 7,
		 id: 'twitter',
		 href: 'twitter.com/michael08618236',
		}
		];

	const renderIcons = icons.map(({ src, alt, key, id, href }) => {	 
						let iconElem = <a href={href} key={key}>
							<li>
								<img src={src} 
								 alt={alt}
								 id={id}
								 height={30} 
								 width={30}
								/>	 
							</li>
						</a>;
						return iconElem;
					}); 

	return(
		<div className="socials-wrapper">
			<h4>DM</h4>
			<ul className="icons-wrapper">
				{renderIcons}
			</ul>
		</div>
		);
}

const wrappedComponent = withErrorBoundary(Contact);

export { Contact };