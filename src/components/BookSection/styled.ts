import styled from "styled-components";

export const BookSectionStyled = styled.div(
	(props) => `
		width: 96%;
		display: flex;
		margin: 0 auto;
		border-bottom: 1px solid #fff;
		background: #bbb;
		padding: 2%;
	`);

export const BookSectionItemStyled = styled.div(
	(props: {col?: number}) => `
		flex-grow: ${props.col};
		flex-basis: 20%;
	`);

export const BookImageStyled = styled(BookSectionItemStyled)`

`;

export const BookTitleStyled = styled(BookSectionItemStyled)`

`;

export const BookAuthorStyled = styled(BookSectionItemStyled)`

`;

export const BookPriceStyled = styled(BookSectionItemStyled)`

`;

export const BookDescriptionStyled = styled(BookSectionItemStyled)`

`;

export const BookActionStyled = styled(BookSectionItemStyled)`

`;

