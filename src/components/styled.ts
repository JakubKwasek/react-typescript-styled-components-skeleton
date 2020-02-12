import styled from "styled-components";

export const SimpleWidgetStyled = styled.div`
	width: 300px;
	height: 100px;
	display: block;
	border: 1px solid ${(props): string => props.theme.colors.secondary};
	background: ${(props): string => props.theme.colors.primary};
	padding: 12px;
	border-radius: 5px;
`;
