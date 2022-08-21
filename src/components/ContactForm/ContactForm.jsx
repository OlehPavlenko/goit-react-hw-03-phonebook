import React from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import {Input, Btn} from './ContactForm.styled'


export class ContactForm extends React.Component {
    state = {
        name: '',
        number: '', 
        id: ''
    
    }


    handleChange = evt => {
        this.setState({
        [evt.target.name]: evt.target.value, 
        id: nanoid()
    })
    }
    handleSubmitForm = evt => {
        evt.preventDefault()
        this.props.onSubmit(this.state)
        this.reset();
    }   
    
    reset = () => {
        this.setState({
        name: '',
        number: '',
        id: ''
        })
    }  
    render (){

        return (
            <form onSubmit ={this.handleSubmitForm} >
            <label htmlFor={this.idName}>Name
        <Input
            value={this.state.name}
            type="text"
            onChange={this.handleChange}
            name="name"
            id = {this.state.id}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
    />
    </label>
    <label htmlFor=''>Number
    <Input
        type="tel"
        value={this.state.number}
        onChange={this.handleChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
    />
    </label>
    <Btn type='submit'>Add contact</Btn>
    </form>
        )
    }
    

}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    name: PropTypes.string,
    number: PropTypes.number, 
    id: PropTypes.string,
};