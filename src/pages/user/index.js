import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe, FaBuilding, FaPen, FaCommentDots, FaMapMarkedAlt } from 'react-icons/fa';

import { Info } from './styles';

export default class User extends Component {
  state = {
    user: [],
    address: [],
    geo: [],
    company: []
  };

  componentDidMount() {
    this.loadUsers();
    this.loadAddress();
    this.loadGeo();
    this.loadCompany();
  }

  loadUsers = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`/users/${id}`);

    console.log(response.data)

    this.setState({ user: response.data })
  };

  loadAddress = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`/users/${id}`);

    console.log(response.data.address)

    this.setState({ address: response.data.address })
  };

  loadGeo = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`/users/${id}`);

    console.log(response.data.address.geo)

    this.setState({ geo: response.data.address.geo })
  };

  loadCompany = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`/users/${id}`);

    console.log(response.data.company)

    this.setState({ company: response.data.company })
  };

  render() {
    const { user } = this.state;
    const { address } = this.state;
    const { geo } = this.state;
    const { company } = this.state;

    return (
      <Info>
        <div className="header">
          <h2>{user.name}</h2>
          <Link to={`/users/${user.id}/`}><FaPen className="icon" />Editar</Link>
        </div>
        <p><FaUser className="icon" />Usuário: {user.username}</p>
        <p><FaEnvelope className="icon" />E-mail: {user.email}</p>

        <p><FaMapMarkerAlt className="icon" />Endereço:
          <span>{address.street},</span>
          <span>{address.suite},</span>
          <span>{address.city},</span>
          <span>{address.zipcode}</span>
        </p>

        <p><FaMapMarkedAlt className="icon" />Geolocalização:
          <span><strong>Lat:</strong> {geo.lat}</span>
          <span><strong>Lng:</strong> {geo.lng}</span>
        </p>

        <p><FaPhone className="icon" />Telefone: {user.phone}</p>
        <p><FaGlobe className="icon" />Website:
          <a href={user.website}>{user.website}</a>
        </p>
        <p><FaBuilding className="icon" />Empresa:
          <span>{company.name}</span>
        </p>
        <p><FaCommentDots className="icon" />
          "{company.catchPhrase}" — "{company.bs}"
        </p>
      </Info >
    );
  }
}
