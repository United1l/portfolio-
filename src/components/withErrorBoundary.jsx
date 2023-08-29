import { useState, useEffect } from 'react';

/*
	Error bounding component that logs any potential from wrapped 
	children
*/
const withErrorBoundary = (WrappedComponent) => {
	return (props) => {
		const [hasError, setHasError] = useState(false);
		const [errorInfo, setErrorInfo] = useState(null);

		useEffect(() => {
			const handleComponentError = (error, errorInfo) => {
				setHasError(true);
				setErrorInfo(errorInfo);
			};

			window.addEventListener('error', handleComponentError);

			return () => {
				window.removeEventListener('error', handleComponentError);
			}

		}, []);

		if (hasError) {
			console.log(errorInfo)
			return <h4 style={{color: 'red'}}>Oops seems like something went wrong. <br /> 
						Refresh after a few minutes
					</h4>;
		}

		return <WrappedComponent {...props} />;
	}
}

export { withErrorBoundary };