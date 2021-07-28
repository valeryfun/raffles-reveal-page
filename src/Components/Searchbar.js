import React from 'react'
import { Form, Button, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Searchbar = () => {
	return (
		<Form className='searchbar'>
			<Form.Control
				type='text'
				placeholder='Search for anything'
				className='mr-sm-2 ml-sm-5 searchbar-text'
			></Form.Control>
			<Dropdown.Toggle className='searchbar-button' id='dropdown-basic'>
				Type
			</Dropdown.Toggle>
			<Button className='searchbar-button'>
				<FontAwesomeIcon icon='search' className='searchbar-button' />
			</Button>
		</Form>
	)
}

export default Searchbar
