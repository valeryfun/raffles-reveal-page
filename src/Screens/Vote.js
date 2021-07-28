import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap'
import DropItem from '../Components/DropItem'
import DragItem from '../Components/DragItem'

const tickets = {
	1: {
		text: 'Silver',
		state: 'ticket'
	},
	2: {
		text: 'Gold',
		state: 'ticket'
	},
	3: {
		text: 'Diamond',
		state: 'ticket'
	}
}

const Vote = () => {
	const [ticketValue, setTicketValue] = useState(tickets)
	return (
		<Container>
			<Row>
				<Col md={4}>
					<Card>
						<Card.Header className='get-tix-header'>
							<h5 className='get-tix-header'>Get More Tickets </h5>
							<Button className='buy-tickets-button' size='md'>
								Buy
							</Button>
						</Card.Header>
						<Card.Body>
							<DropItem
								heading='Ticket'
								onDrop={id => {
									const currentTicket = { ...ticketValue[id] }
									currentTicket.state = 'ticket'
									setTicketValue({ ...ticketValue, ...{ [id]: currentTicket } })
								}}
							>
								{Object.keys(ticketValue)
									.map(key => ({ id: key, ...ticketValue[key] }))
									.filter(ticket => ticket.state === 'ticket')
									.map(ticket => (
										<DragItem id={ticket.id} data={ticket} key={ticket.id} />
									))}
							</DropItem>
						</Card.Body>
					</Card>
				</Col>
				<Col md={8}>
					<Card>
						<Card.Title></Card.Title>
						<Card.Body>
							<Container className='box'>
								<DropItem
									heading='Collectors Event'
									onDrop={id => {
										const currentTickets = { ...ticketValue[id] }
										currentTickets.state = 'event'
										setTicketValue({
											...ticketValue,
											...{ [id]: currentTickets }
										})
									}}
								>
									{Object.keys(ticketValue)
										.map(key => ({ id: key, ...ticketValue[key] }))
										.filter(ticket => ticket.state === 'event')
										.map(ticket => (
											<DragItem id={ticket.id} data={ticket} key={ticket.id} />
										))}
								</DropItem>
							</Container>
						</Card.Body>
						<Card.Footer className='vote-card-footer'>
							<Row>
								<Col md={8}>
									<h5>Draw Tickets</h5>
									<p>
										<strong>10</strong> Tickets found
									</p>
								</Col>
								<Col md={4} className='get-tickets-col'>
									<Dropdown.Toggle
										variant='outline-secondary'
										className='dropdown-toggle'
									>
										Silver Ticket (1)
									</Dropdown.Toggle>
									<Button className='draw-tickets-button'>Draw Ticket</Button>
								</Col>
							</Row>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default Vote
