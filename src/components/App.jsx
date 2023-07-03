import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import data from 'data.json';

export class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  SubmitContact = el => {
    const { contacts } = this.state;

    if (contacts.some(({ name }) => name === el.name)) {
      Notify.failure(`${el.name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { ...el }],
    }));
  };

  onChangeFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm SubmitContact={this.SubmitContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter.toLowerCase()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
