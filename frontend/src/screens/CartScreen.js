import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
	ListGroupItem,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen({ match, location, history }) {
	const productId = match.params.id;
	const qty = location.search ? Number(location.search.split("=")[1]) : 1;
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cartReducers);
	const { cartItems } = cart;
	console.log("cartItems", cartItems);
	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [productId, qty, dispatch]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkOutHandler = () => {
		history.push("/login?redirect=shipping");
	};

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<Message variant="info">
						Your Cart is Empty <Link to="/">Go Back</Link>
					</Message>
				) : (
					<ListGroup variant="flush">
						{cartItems.map((item) => (
							<ListGroupItem key={item.product}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={3}>
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</Col>
									<Col md={2}>{item.price}</Col>
									<Col md={3}>
										<Form.Control
											as="select"
											value={item.qty}
											onChange={(e) =>
												dispatch(
													addToCart(item.product, Number(e.target.value))
												)
											}
										>
											{
												//[0,1,2] if we have 03 countInStock
												[...Array(item.countInStock).keys()].map((x) => (
													<option key={x + 1} value={x + 1}>
														{x + 1}
													</option>
												))
											}
										</Form.Control>
									</Col>
									<Col md={1}>
										<Button
											variant="light"
											type="button"
											onClick={() => removeFromCartHandler(item.product)}
										>
											<i className="fas fa-trash"></i>
										</Button>
									</Col>
								</Row>
							</ListGroupItem>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card style={{ width: "18rem" }}>
					<Card.Header>
						SubTotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
						Items $ {cartItems.reduce((acc, item) => acc + item.price, 0)}
					</Card.Header>

					<ListGroup variant="flush">
						<ListGroup.Item>
							<div className="d-grid">
								<Button
									variant="primary"
									// size="sm"
									type="button"
									className="btn-block"
									disabled={cartItems.length === 0}
									onClick={checkOutHandler}
								>
									Process To CheckOut
								</Button>
							</div>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
}
export default CartScreen;
