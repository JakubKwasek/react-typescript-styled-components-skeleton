import styled from "styled-components";

export const SimpleWidgetStyled = styled.div(
	(props) => `
		width: 300px;
		height: 100px;
		display: block;
		border: 1px solid ${props.theme.colors.secondary};
		background: ${props.theme.colors.primary};
		padding: 12px;
		border-radius: 5px;
`);
