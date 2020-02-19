import * as React from "react";
import { books } from "../data/books";
import { Box, Button } from "grommet";
import { BoxFactory } from "../components/BoxFactory";

export const AddToCart = (id: number): void => {
	console.log(id);
};

export const StoreContainer = (): JSX.Element => (
	<>
		{
			books.map((book) => (
				<Box align="start" direction={"row"} border={{side: "bottom",}} pad="small" key={book.id}>
					<BoxFactory
						width={{ min: "10%", }}>
						<img src={book.image} />
					</BoxFactory>
					<BoxFactory
						width={{ min: "30%", }}>
						<>
							<small>Title:</small>
							<p>{book.title}</p></>
					</BoxFactory>
					<BoxFactory
						width={{ min: "20%", }}>
						<>
							<small>Author:</small>
							<p>{book.author}</p>
						</>
					</BoxFactory>
					<BoxFactory
						width={{ min: "20%", }}>
						<>
							<small>Price:</small>
							<p>{book.price}</p>
						</>
					</BoxFactory>
					<BoxFactory
						width={{ min: "20%", }}>
						<Button
							label="Add"
							primary
							onClick={(): void => AddToCart(book.id)} />
					</BoxFactory>
				</Box>
			))
		}
	</>
);
