import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'nome',
				email: 'email@provide.com',
				phone: '33',
				type: 'personal'
			},
			{
				id: 2,
				name: 'nome2',
				email: 'email2@provide.es',
				phone: '332',
				type: 'professional'
			},
		],
		current: null,
	};
	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuid.v4();
		dispatch({
			type: ADD_CONTACT,
			payload: contact
		});
	}

	// Delete Contact
	const deleteContact = (id) => {
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		});
	}

	// Set Current Contact
	const setCurrent = contact => {
		dispatch({
			type: SET_CURRENT,
			payload: contact
		});
	}

	// Clear Current Contact
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT
		});
	}

	// Update Contact
	const updateContact = (contact) => {
		dispatch({
			type: UPDATE_CONTACT,
			payload: contact
		});
	}

	// Filter Contacts

	// Clear Filter

	return (
		<ContactContext.Provider
		value={{
			contacts: state.contacts,
			current: state.current,
			addContact,
			deleteContact,
			setCurrent,
			clearCurrent,
			updateContact,
		}}
		>
			{ props.children }
		</ContactContext.Provider>
	)
};

export default ContactState;
