import React from 'react';

import { Container } from './styles';

interface TooltipeProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipeProps> = ({ children, className, title }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
