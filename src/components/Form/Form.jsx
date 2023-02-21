import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { ContactFormStyled, Input, Label, Btn } from './Form.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleOnSubmit = (values, { resetForm }) => {
    console.log(values);
    onSubmit({
      ...values,
      id: nanoid(10),
    });
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
      <ContactFormStyled autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </ContactFormStyled>
    </Formik>
  );
};

// state = {
//   name: '',
//   number: '',
// };

// handleInputChange = evt => {
//   this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
// };

// handleSubmit = evt => {
//   evt.preventDefault();
//   this.props.onSubmit({
//     ...this.state,
//     id: nanoid(10),
//   });

//   this.reset();
// };

// reset = () => {
//   this.setState({
//     name: '',
//     number: '',
//   });
// };
