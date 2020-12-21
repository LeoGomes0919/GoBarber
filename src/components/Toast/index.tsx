import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './styles';

import ToastComponent from './ToastComponent';
import { ToastMessage } from '../../hooks/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { top: '-120px', opacity: 0 },
      enter: { top: '0px', opacity: 1 },
      leave: { top: '-120px', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <ToastComponent key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
