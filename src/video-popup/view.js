import domReady from '@wordpress/dom-ready';
import { createRoot, render, useState } from '@wordpress/element';

const App = ( { attributes } ) => {
	const {
		videoUrl,
		isPlayButton,
		colorIcon,
		url,
        alt,
        id
	} = attributes;

	const [isOpen, setOpen] = useState(false);

	const closeModal = () => {
		setOpen(false);
	};

	return (
		<div className="gbc-blocks-customer-feature">
			<div className="wp-block-gbc-blocks-video-popup-inner">
				<div className="gbc-video-popup-thumbnail">

					<img
						src={ url }
						alt={ alt }
						data-id={ id }

					/>
					{ isPlayButton && (
						<div className="gbc-video-play-button" onClick={() => setOpen(true)}>
							{
								colorIcon ? (
									<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
										<circle cx="36" cy="36" r="36" fill="#7171FF"/>
										<path d="M48.72 32.5357C51.3867 34.0753 51.3867 37.9243 48.72 39.4639L32.64 48.7477C29.9734 50.2873 26.64 48.3628 26.64 45.2836L26.64 26.716C26.64 23.6368 29.9734 21.7123 32.64 23.2519L48.72 32.5357Z" fill="white"/>
									</svg>

								) : (
									<svg width="76" height="81" viewBox="0 0 76 81" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d_1_46)">
										<circle cx="38" cy="34.3867" r="34" fill="white"/>
										</g>
										<path d="M48.2775 32.3337C49.8588 33.2466 49.8588 35.529 48.2775 36.442L34.6385 44.3165C33.0572 45.2294 31.0806 44.0882 31.0806 42.2623L31.0806 26.5134C31.0806 24.6875 33.0572 23.5463 34.6385 24.4592L48.2775 32.3337Z" fill="#7171FF"/>
										<defs>
										<filter id="filter0_d_1_46" x="0.204901" y="0.386719" width="75.5902" height="80.0969" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
										<feFlood floodOpacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
										<feOffset dy="8.30178"/>
										<feGaussianBlur stdDeviation="1.89755"/>
										<feComposite in2="hardAlpha" operator="out"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_46"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_46" result="shape"/>
										</filter>
										</defs>
									</svg>

								)
							}
						</div>
					) }
				</div>

			</div>

			{ isOpen && (
				<div className="gbc-video-modal-popup">
					<div className="gbc-video-modal-popup-body">
						<div className="close" onClick={closeModal}>⤬</div>
						<div className="gbc-video-modal-popup-iframe">
							<iframe
								src={ videoUrl }
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
			) }
		</div>
	);
};

domReady( () => {
	const elements = document.querySelectorAll(
		'.wp-block-gbc-blocks-video-popup'
	);
	const elementsArr = Array.from( elements );

	elementsArr.forEach( ( item ) => {
		if ( createRoot ) {
			createRoot( item ).render(
				<App
					attributes={ JSON.parse(
						item.getAttribute( 'data-block-attributes' )
					) }
				/>
			);
		} else {
			render(
				<App
					attributes={ JSON.parse(
						item.getAttribute( 'data-block-attributes' )
					) }
				/>,
				item
			);
		}
	} );

} );