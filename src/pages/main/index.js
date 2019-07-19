import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { FaEnvelope, FaGlobe } from 'react-icons/fa';

import { User } from './styles';

export default class Main extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const response = await api.get('/users')

    this.setState({ users: response.data })
  };

  render() {
    const { users } = this.state;

    return (
      <User>
        {users.map(user => (
          <article key={user.id}>
            <h2>{user.name}</h2>
            <div className="data">
              <p><FaEnvelope className="icon" /> E-mail: {user.email}</p>
              <p><FaGlobe className="icon" /> Website: {user.website}</p>
            </div>

            <Link to={`/users/${user.id}`}>Ver Usuário</Link>
          </article>
        ))}
      </User>
    );
  }
}
