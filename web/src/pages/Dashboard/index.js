import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>31 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Valdir klarken</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Available</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Valdir klarken</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Valdir klarken</span>
        </Time>
      </ul>
    </Container>
  );
}
