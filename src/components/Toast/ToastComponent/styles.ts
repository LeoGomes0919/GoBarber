import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription?: boolean;
}

const containerTypeVariations = {
  info: css`
    background-color: #cce5ff;
    color: #004085;
  `,
  success: css`
    background-color: #d4edda;
    color: #155724;
  `,
  error: css`
    background-color: #f8d7da;
    color: #721c24;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  max-width: 340px;
  width: 100%;
  position: relative;
  display: flex;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${(props) => containerTypeVariations[props.type || 'info']}

  + div {
    margin-top: 8px;
  }

  > svg {
    margin: 2px 8px 0px 0px;
  }

  div {
    flex: 1;
  }

  p {
    margin-top: 4px;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.8;
  }

  button {
    border: 0;
    background: transparent;
    outline: 0;
    position: absolute;
    top: 19px;
    opacity: 0.6;
    color: inherit;
    right: 16px;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0px;
      }
    `}
`;
