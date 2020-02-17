import styled from "styled-components";

export const BookSectionStyled = styled.div(
	(props) => `
		width: 96%;
		display: flex;
		margin: 0 auto;
		border-bottom: 1px solid #ccc;
		background: #efeeee;
		padding: 2%;
		box-shadow: transparent 0px 0px 2px;
		align-items: center;
		&:hover{
			box-shadow: #bbb 0px 0px 5px;
			background: #ddd;
		}
`);

export const BookSectionItemStyled = styled.div(
	(props) => `
		flex-basis: 20%;
		border-right: 1px solid #ddd;
		padding: 0px 5px;
`);

export const BookImageStyled = styled(BookSectionItemStyled)`
	flex-basis: 30px;
	img {
		border-radius: 3px;
	}
`;

export const BookActionStyled = styled(BookSectionItemStyled)`
	border-right: 0;
	text-align: center;
`;
