import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
	${normalize}

	body {
		font-family: 'Helvetica', 'Arial', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;	
		height: 100vh;
		background: ${(props) => props.theme.colors.ui.background};
	}
	
	html, body, #root, #root>div {
	  height: 100vh
	}
`;
