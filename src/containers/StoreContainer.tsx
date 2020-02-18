import * as React from "react";
import { books } from "../data/books";
import {
	BookSectionStyled,
	BookImageStyled,
	BookSectionItemStyled,
	BookActionStyled
} from "../components/BookSection/styled";
import { ButtonPrimary } from "../components/Buttons/styled";

export const AddToCart = (id: number): void => {
	console.log(id);
};

export const StoreContainer = (): JSX.Element => (
	<>
		{
			books.map((book) => (
				<BookSectionStyled key={book.id}>
					<BookImageStyled>
						<img src={book.image} />
					</BookImageStyled>
					<BookSectionItemStyled>
						<small>Title:</small>
						<p>{book.title}</p>
					</BookSectionItemStyled>
					<BookSectionItemStyled>
						<small>Author:</small>
						<p>{book.author}</p>
					</BookSectionItemStyled>
					<BookSectionItemStyled>
						<small>Price:</small>
						<p>{book.price}</p>
					</BookSectionItemStyled>
					<BookActionStyled>
						<ButtonPrimary
							onClick={(): void => AddToCart(book.id)}>
								Add to Cart
						</ButtonPrimary>
					</BookActionStyled>
				</BookSectionStyled>
			))
		}
	</>
);
