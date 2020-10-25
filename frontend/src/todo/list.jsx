import React from 'react';

import IconButton from '../template/iconButton';
import If from '../template/if'

export default props => {

  const renderRows = () => {
    return props.list.map(
      (todo) => (
        <tr key={todo._id}>
          <td>
            <If test={todo.done}>
              <i className={'fa fa-check'}></i>
            </If>
            <If test={!todo.done}>
              <i className={'fa fa-warning'}></i>
            </If>

          </td>
          <td>{todo.description}</td>
          <td className='table-actions'>
            <IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)}></IconButton>
            <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)}></IconButton>
          </td>
        </tr>
      )
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Estado</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )

}