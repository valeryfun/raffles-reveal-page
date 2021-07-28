import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Header from './Components/Header'
import './App.css'
import { Container } from 'react-bootstrap'
import Home from './Screens/Home'
import Vote from './Screens/Vote'
import Footer from './Components/Footer'

library.add(faSearch)
const App = () => {
	return (
		<div className='App'>
			<Router>
				<Header />
				<main className='py-3'>
					<Container>
						<Route path='/' exact component={Home} />
						<Route path='/vote-dao' component={Vote} />
					</Container>
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App
