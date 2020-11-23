import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  background: #232129;
  border: 2px solid #232129;
  border-radius: 8px;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    color: #666360;
    margin-right: 8px;
  }

  input {
    border: 0px;
    flex: 1;
    color: #f4ede8;
    background: transparent;

    &::placeholder {
      color: #666360;
    }
  }
`;
