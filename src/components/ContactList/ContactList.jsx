import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, filter, onDeleteContact } = this.props;
    const contactItem = filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
      : contacts;
    return (
      <ul>
        {contactItem.map(({ id, name, number }) => (
          <li key={id}>
            {`${name}: ${number}`}
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
