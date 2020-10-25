import React from 'react';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
  <div role='form'  className='todo-form'>
    <Grid cols='10 9 10'>
      <input type="text" className='form-control' placeholder="Digite a descrição" onChange={props.handleChange} value={props.description} />
    </Grid>
    <Grid cols='2 3 2'>
      <IconButton style='primary' icon='plus' onClick={props.handleAdd}> </IconButton>
      <IconButton style='info' icon='search' onClick={props.handleSearch}> </IconButton>
    </Grid>
  </div>
)
