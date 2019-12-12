import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactState from '../../context/contact/ContactState';

const Home = () => {
	return (
		<div className="grid-2">
			<div>
				<ContactForm />
			</div>
			<div>
				<Contacts />
			</div>
		</div>
	)
}

export default Home;
