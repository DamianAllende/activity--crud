import React, { Component } from 'react'
import request from 'superagent';

import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'absolute',
  right: 20,
  bottom: 20
};


const API_URL =  'https://reqres.in' 

class UsersTable extends Component {

constructor(){
  super()

  this.state = {
    users: []
  }
}


  componentDidMount() {
      request
        .get(`${API_URL}/api/users?per_page=20`)
        .then((data) => {
          this.setState({
            users: data.body.data
          })
        })
        .catch(function(e){
          console.log(e)
        })
   }

  render() {
    console.log(this.state.users)
    const tabla = this.state.users
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>

           {tabla.map((user) => {
                return(
                   <TableRow>
                      <TableRowColumn>{user.id}</TableRowColumn>
                      <TableRowColumn>{user.first_name}</TableRowColumn>
                      <TableRowColumn>{user.last_name}</TableRowColumn>
                      <TableRowColumn>
                        <Link to={'/user/' + user.id}>
                          <RaisedButton label="See details" />
                        </Link>
                      </TableRowColumn>
                    </TableRow>
                )
            })}
          </TableBody>
        </Table>
        <Link to={'/newuser'}>
          <FloatingActionButton style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>  
      </div>
    )
  }
}

export default UsersTable
