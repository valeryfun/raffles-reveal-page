import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap'
import Searchbar from './Searchbar'

const Header = () => {
	return (
		<header>
			<Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand>
						<img src='./logo.png' alt='logo' />
					</Navbar.Brand>
					<Nav className='mr-auto'>
						<Searchbar />
					</Nav>
					<Nav className='ml-auto'>
						<Nav.Link>Browse</Nav.Link>
						<Nav.Link>Discover</Nav.Link>
						<Nav.Link>Mint an Item</Nav.Link>
						<Nav.Link href='/vote-dao'>Vote/DAO</Nav.Link>
						<NavDropdown title='My Account' id='collapse-dropdown'>
							<NavDropdown.Item>Logout</NavDropdown.Item>
						</NavDropdown>
						<Dropdown.Toggle
							variant='outline-secondary'
							size='sm'
							id='dropdown-basic'
						>
							Ethereum
						</Dropdown.Toggle>
					</Nav>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
