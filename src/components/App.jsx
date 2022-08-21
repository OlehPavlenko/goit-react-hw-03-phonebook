import React from 'react';
import {ContactList} from 'components/ContactList/ContactList'
import {ContactForm} from 'components/ContactForm/ContactForm'
import { Filter } from 'components/Filter/Filter';
import PropTypes from 'prop-types';



export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  componentDidMount() {
    const contact = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contact);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContactList = data => {
    const searchName = data.name.toLowerCase()
    this.state.contacts.find(contact =>
      contact.name.toLowerCase() === searchName)
      ? (alert("contact is already in contacts")) :
      (this.setState(prevState => ({
        contacts: [...prevState.contacts, data]

      })))
  };

handleDelete = (contId) => {
this.setState(prevState => ({
contacts: prevState.contacts.filter(({id}) => id !== contId
    ),
  }));
};

  handleFindChange = evt => {
    this.setState({
      filter: evt.target.value
    });
  };



  render() {
    const filterContact = this.state.contacts.filter(contacts => 
      contacts.name.toLowerCase().includes(this.state.filter.toLowerCase())) 
  return (
    <div>
<h1>Phonebook</h1>
<ContactForm onSubmit={this.addContactList}/> 
<h2>Contacts</h2>  
<ContactList contacts ={filterContact} onLeaveFeedback = {this.handleDelete} />
<Filter value={this.state.filter} onChange={this.handleFindChange}/>
    </div>
  );
};
}
App.protoType = {
  state: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
  filter: PropTypes.string.isRequired
};