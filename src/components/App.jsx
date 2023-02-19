import React, { Component } from 'react';
import { Form } from './Form/Form';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div
        style={{
          paddingLeft: 30,
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return <li>{this.state.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
