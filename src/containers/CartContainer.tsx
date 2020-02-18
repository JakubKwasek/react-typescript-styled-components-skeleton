import * as React from "react";
import {
	BookSectionStyled,
	BookSectionItemStyled,
	BookActionStyled,
	BookImageStyled
} from "../components/BookSection/styled";
import {
	ButtonPrimary,
	BadgeButton } from "../components/Buttons/styled";
import { booksCart } from "../data/booksCart";

enum QuantityOperation {
	"add",
	"remove"
}

export const RemoveFromCart = (id: number): void => {
	console.log(id);
};

export const ChangeQuantity = (id: number, operation: QuantityOperation): void => {
	console.log(id);
};

export const CartContainer = (): JSX.Element => (
	<>
		{
			booksCart.map((book) => (
				<BookSectionStyled key={book.id}>
					<BookImageStyled>
						<img src={book.image} />
					</BookImageStyled>
					<BookSectionItemStyled>
						<small>Title:</small>
						<p>{book.title}</p>
					</BookSectionItemStyled>
					<BookSectionItemStyled>
						<small>Price:</small>
						<p>{book.price}</p>
					</BookSectionItemStyled>
					<BookSectionItemStyled>
						<small>Quantity:</small>
						<p>
							<BadgeButton
								onClick={(): void =>
									ChangeQuantity(book.id, QuantityOperation.remove)}>
								-
							</BadgeButton>
							{book.quantity}
							<BadgeButton
								onClick={(): void =>
									ChangeQuantity(book.id, QuantityOperation.add)}>
								+
							</BadgeButton>
						</p>
					</BookSectionItemStyled>
					<BookActionStyled>
						<ButtonPrimary
							onClick={(e): void =>
								RemoveFromCart(book.id)}>
							Remove
						</ButtonPrimary>
					</BookActionStyled>
				</BookSectionStyled>
			))
		}
	</>
);
