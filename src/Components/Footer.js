import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Row className='footer'>
				<Col>
					<img src='./logo.png' alt='logo' />
					<strong> Mintable</strong>
				</Col>
				<Col>
					<strong>My account</strong>
					<p>Create a Store</p>
					<p>List an Item for sale</p>
				</Col>
				<Col>
					<strong>Need Help?</strong>
					<p>FAQ</p>
					<p>Mintable guide</p>
				</Col>
				<Col>
					<strong>Buy an Item</strong>
					<p>Digital Items</p>
					<p>Stores</p>
				</Col>
				<Col>
					<strong>Legal</strong>
					<p>Privacy Policy</p>
					<p>Terms of Use</p>
				</Col>
			</Row>
		</footer>
	)
}

export default Footer
