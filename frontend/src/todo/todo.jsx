import React, { Component } from 'react';

import Header from '../template/pageHeader';
import Form from './form';
import List from './list';

export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    console.log(this)
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  render() {
    return (
      <div>
        <Header name="Tarefas" smal="Cadastro"></Header>
        <Form handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange}></Form>
        <List></List>
      </div>
    )
  }
}