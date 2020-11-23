import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    width: 100%;
    padding: 16px;
    background: #ff9000;
    margin-top: 24px;
    border: 0px;
    font-weight: 500;
    border-radius: 8px;
    color: #312e38;
    line-height: 26px;
    transition: 0.2s background-color;

    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }
  }
`;
