import * as React from "react";
import { books } from "../data/books";
import { Box } from "grommet/es6/components/Box";
import { Button } from "grommet/es6/components/Button";
import { Heading } from "grommet/es6/components/Heading";
import { BoxFactory } from "../components/BoxFactory";

export const AddToCart = (id: number): void => {
	console.log(id);
};

export const StoreContainer = (): JSX.Element => (
	<>
		<Box
			justify="center"
			align="center"
			pad="xxsmall"
			background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)">
			<Heading color="white" level={4}>Pick Items</Heading>
		</Box>
		{
			books.map((book) => (
				<Box
					align="start"
					direction={"row"}
					border={{side: "bottom"}}
					pad="small"
					key={book.id}>
					<BoxFactory
						width={{ min: "10%" }}>
						<img src={book.image} />
					</BoxFactory>
					<BoxFactory
						width={{ min: "30%" }}>
						<>
							<small>Title:</small>
							<p>{book.title}</p></>
					</BoxFactory>
					<BoxFactory
						width={{ min: "20%" }}>
						<>
							<small>Author:</small>
							<p>{book.author}</p>
						</>
					</BoxFactory>
					<BoxFactory
						width={{ min: "20%" }}>
						<>
							<small>Price:</small>
							<p>{book.price}</p>
						</>
					</BoxFactory>
					<BoxFactory
						width={{ min: "20%" }}>
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
