import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    background: #ff9000;
    width: 160px;
    padding: 4px 4px 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0px 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;