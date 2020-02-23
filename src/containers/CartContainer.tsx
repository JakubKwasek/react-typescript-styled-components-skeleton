import * as React from "react";
import { Box } from "grommet/es6/components/Box";
import { Button } from "grommet/es6/components/Button";
import { Heading } from "grommet/es6/components/Heading";
import { booksCart } from "../data/booksCart";
import { BoxFactory } from "../components/BoxFactory";

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
		<Box
			justify="start"
			align="center"
			pad="xxsmall"
			background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)">
			<Heading color="white" level={4}>Your order</Heading>
		</Box>
		{
			booksCart.map((book) => (
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
							<p>{book.title}</p>
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
						<>
							<small>Quantity:</small>
							<p>
								<Button
									margin={{ horizontal: "10px"}}
									label="-"
									reverse
									onClick={(): void =>
										ChangeQuantity(book.id, QuantityOperation.remove)}/>
								{book.quantity}
								<Button
									margin={{ horizontal: "10px"}}
									label="+"
									reverse
									onClick={(): void =>
										ChangeQuantity(book.id, QuantityOperation.add)}/>
							</p>
						</>
					</BoxFactory>
					<BoxFactory
						width={{ min: "20%" }}>
						<>
							<small>Action:</small>
							<p>
								<Button
									label="Remove"
									primary
									onClick={(e): void =>
										RemoveFromCart(book.id)} />
							</p>
						</>
					</BoxFactory>
				</Box>
			))
		}
	</>
);
