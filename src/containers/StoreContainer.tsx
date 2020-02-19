import * as React from "react";
import { books } from "../data/books";
import { Box, Button } from "grommet";

export const AddToCart = (id: number): void => {
	console.log(id);
};

export const StoreContainer = (): JSX.Element => (
	<>
		{
			books.map((book) => (
				<Box align="start" direction={"row"} border={{side: "bottom",}} pad="small" key={book.id}>
					<Box
						border={{ side: "right", }}
						pad="small"
						width={{ min: "10%", }}
						align={"start"}
						direction={"column"}
						gap="medium">
						<img src={book.image} />
					</Box>
					<Box
						pad="small"
						width={{ min: "30%", }} align={"start"} direction={"column"} gap="medium">
						<small>Title:</small>
						<p>{book.title}</p>
					</Box>
					<Box
						pad="small"
						width={{ min: "20%", }} align={"start"} direction={"column"} gap="medium">
						<small>Author:</small>
						<p>{book.author}</p>
					</Box>
					<Box
						pad="small"
						width={{ min: "20%", }} align={"start"} direction={"column"} gap="medium">
						<small>Price:</small>
						<p>{book.price}</p>
					</Box>
					<Box
						pad="small"
						width={{ min: "20%", }} align={"start"} direction={"column"} gap="medium">
						<Button
							label="Add"
							primary
							onClick={(): void => AddToCart(book.id)} />
					</Box>
				</Box>
			))
		}
	</>
);
