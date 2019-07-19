import React from 'react';

import { FaReact } from 'react-icons/fa';

import { Title } from './styles';

export default function Header() {
  return (
    <Title>
      <h1>
        Teste Front-End
        <span>
          <FaReact className="icon" />
        </span>
      </h1>
    </Title>
  );
}
