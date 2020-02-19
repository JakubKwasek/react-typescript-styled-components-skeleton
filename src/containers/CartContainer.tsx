import * as React from "react";
import { Box, Button } from "grommet";
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
		{
			booksCart.map((book) => (
				<Box
					align="start"
					direction={"row"}
					border={{side: "bottom",}}
					pad="small"
					key={book.id}>
					<BoxFactory
						width={{ min: "10%", }}>
						<img src={book.image} />
					</BoxFactory>
					<BoxFactory
						width={{ min: "30%", }}>
						<>
							<small>Title:</small>
							<p>{book.title}</p>
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
						<>
							<small>Quantity:</small>
							<p>
								<Button
									margin={{ horizontal: "10px",}}
									label="-"
									reverse
									onClick={(): void =>
										ChangeQuantity(book.id, QuantityOperation.remove)}/>
								{book.quantity}
								<Button
									margin={{ horizontal: "10px",}}
									label="+"
									reverse
									onClick={(): void =>
										ChangeQuantity(book.id, QuantityOperation.add)}/>
							</p>
						</>
					</BoxFactory>
					<BoxFactory
						width={{ min: "20%", }}>
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
