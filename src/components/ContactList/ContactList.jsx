import { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Item, Btn, Contact } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { contacts, filter, onDeleteContact } = this.props;
    const contactItem = filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
      : contacts;
    return (
      <List>
        {contactItem.map(({ id, name, number }) => (
          <Item key={id}>
            <Contact> {`${name}: ${number}`}</Contact>
            <Btn type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Btn>
          </Item>
        ))}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
export default ContactList;
