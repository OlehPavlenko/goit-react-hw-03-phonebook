import React from 'react';
import PropTypes from 'prop-types';
import {List, Btn} from './ContactList.styled'


export const ContactList = ({contacts, onLeaveFeedback}) =>{

    return(
        <ul>
            {contacts.map(contact =>{
                return (
<List key={contact.id}>{contact.name}: {contact.number}
<Btn type='button' onClick={() => onLeaveFeedback(contact.id) } id={contact.id}>Delete</Btn>
</List>
            )})}
        </ul>
    )
}
ContactList.protoType = {
    onClick: PropTypes.func.isRequired,
}