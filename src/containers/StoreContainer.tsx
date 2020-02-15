import * as React from "react";
import { books } from "../data/books";
import {
	BookSectionStyled,
	BookImageStyled,
	BookTitleStyled,
	BookAuthorStyled,
	BookPriceStyled,
	BookActionStyled
} from "../components/BookSection/styled";
import { ButtonPrimary } from "../components/Buttons/styled";

export const StoreContainer = (): JSX.Element => (
	<>
		{
			books.map((book) => (
				<BookSectionStyled key={book.id}>
					<BookImageStyled col={1}><img src={book.image}/></BookImageStyled>
					<BookTitleStyled col={1}><small>Title:</small><p>{book.title}</p></BookTitleStyled>
					<BookAuthorStyled col={1}><small>Author:</small><p>{book.author}</p></BookAuthorStyled>
					<BookPriceStyled col={1}><small>Price:</small><p>{book.price}</p></BookPriceStyled>
					<BookActionStyled col={1}><ButtonPrimary>Add to Cart</ButtonPrimary></BookActionStyled>
				</BookSectionStyled>
			))
		}
	</>
);
