import * as React from "react";
import { books } from "../data/books";

export const StoreContainer = (): JSX.Element => (
	<>
		{
			books.map((book) => (
				<section key={book.id}>
					<div>Title: {book.title}</div>
					<div>Author: {book.author}</div>
					<div>Title: {book.title}</div>
					<div>Price: {book.price}</div>
					<div>Description: {book.description}</div>
				</section>
			))
		}
	</>
);
