import axios from 'axios';
import React, { Component } from 'react';

import Header from '../template/pageHeader';
import Form from './form';
import List from './list';



const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.refresh()
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(() => this.refresh(this.state.description))
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL, { description })
      .then(resp => this.refresh());
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description));
  }

  refresh(description = '') {
    const search = description ? `&description__regex=${description}` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({ ...this.state, description, list: resp.data }))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  render() {
    return (
      <div>
        <Header name="Tarefas" smal="Cadastro"></Header>
        <Form
          handleSearch={this.handleSearch}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          description={this.state.description}
        >
        </Form>
        <List
          handleMarkAsDone={this.handleMarkAsDone}
          handleRemove={this.handleRemove}
          list={this.state.list}>
        </List>
      </div>
    )
  }
}