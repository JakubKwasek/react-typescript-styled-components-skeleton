import * as React from "react";
import { books } from "../data/books";
import { Box, Button } from "grommet";
// import { StoreContainerItem } from "./StoreContainerStyled";

export const AddToCart = (id: number): void => {
	console.log(id);
};

export const StoreContainer = (): JSX.Element => (
	<>
		{
			books.map((book) => (
				<Box align="start" direction={"row"} pad="medium" key={book.id}>
					<Box width={{ min: "20%", }} align={"start"} direction={"column"} gap="medium" >
						<img src={book.image} />
					</Box>
					<Box width={{ min: "20%", }} align={"start"} direction={"column"} gap="medium">
						<small>Title:</small>
						<p>{book.title}</p>
					</Box>
					<Box width={{ min: "20%", }} align={"start"} direction={"column"} gap="medium">
						<small>Author:</small>
						<p>{book.author}</p>
					</Box>
					<Box width={{ min: "20%", }} align={"start"} direction={"column"} gap="medium">
						<small>Price:</small>
						<p>{book.price}</p>
					</Box>
					<Box width={{ min: "20%", }} align={"start"} direction={"column"} gap="medium">
						<Button
							primary
							onClick={(): void => AddToCart(book.id)}>Add to Cart</Button>
					</Box>
				</Box>
			))
		}
	</>
);
