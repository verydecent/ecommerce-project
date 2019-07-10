import React from 'react';
import axios from 'axios';

class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/api/users';

    const token = localStorage.getItem('jwt');
    const options = { headers: { authorization: 'bearer' + ' ' + token } };
    axios
      .get(endpoint,  options)
      .then(res => {
        console.log('users', res.data);
        this.setState({ users: res.data.users });
      })
      .catch(err => console.error('Error', err));
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <h1>Users List</h1>
        <div>
          {this.state.users.map((user, index) => {
            return (<div key={index}>
              <p>{user.email}</p>
            </div>)
          })}
        </div>
      </div>
    );
  }
}

export default UsersList;