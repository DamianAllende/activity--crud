import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import request from 'superagent';

const style = {
  width: 400,
  border: '1px solid #EAEAEA',
  borderRadius: 5,
  margin: '0 auto',
  padding: 20
}

const API_URL =  'https://reqres.in'


class NewUser extends Component {

  createNewUser = (e) => {
  e.preventDefault()
  console.log( e.target.name.value)
    const userData = {
      name: e.target.name.value,
      job: e.target.job.value
    } 


    request
      .post(`${API_URL}/api/user`)
      .send(userData)
      .then(() => {
        alert('yeah')
      })
      .catch(function(e){
        console.log(e)
      })



}




  render() {
    return (
      <form  style={style} onSubmit={ (e) => { this.createNewUser(e) }}>
        <h3>New User</h3>
        <div>
          <TextField
            id="name"
            hintText="i.e. John"
            floatingLabelText="Name"
            defaultValue="Default Value"
            fullWidth={true}

          />
        </div>
        <div>
          <TextField
            id="job"
            hintText="i.e. Killer"
            floatingLabelText="Job"
            fullWidth={true}
          />
        </div>
        <RaisedButton type='submit' label="Create" primary={true} />
      </form>
    )
  }
}

export default NewUser
