import styled from "styled-components";

export const HeaderStyled = styled.div(
	(props) => `
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: left;
		border-bottom: 1px solid #ccc;
		background: #ddd;
		padding: 12px;
`);

export const SiteNameStyled = styled.div(
	(props) => `
		color: #fff;
		height: 50px;
		display: block;
		border-bottom: 1px solid #ccc;
		background: #ddd;
		padding: 12px;
`);

export const HeaderItemStyled = styled.div(
	(props) => `
		flex-grow: 1;
`);
