import * as React from "react";
import { books } from "../data/books";
import {
	BookSectionStyled,
	BookImageStyled,
	BookTitleStyled,
	BookAuthorStyled,
	BookPriceStyled,
	BookDescriptionStyled,
	BookActionStyled
} from "../components/BookSection/styled";

export const StoreContainer = (): JSX.Element => (
	<>
		{
			books.map((book) => (
				<BookSectionStyled key={book.id}>
					<BookImageStyled col={1}></BookImageStyled>
					<BookTitleStyled col={1}>Title: {book.title}</BookTitleStyled>
					<BookAuthorStyled col={1}>Author: {book.author}</BookAuthorStyled>
					<BookPriceStyled col={1}>Price: {book.price}</BookPriceStyled>
					<BookDescriptionStyled col={3}>Description: {book.description}</BookDescriptionStyled>
					<BookActionStyled col={1}><button>Add to Cart</button></BookActionStyled>
				</BookSectionStyled>
			))
		}
	</>
);
