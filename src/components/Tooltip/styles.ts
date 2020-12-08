import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  span {
    position: absolute;
    background: #ff9000;
    width: 160px;
    padding: 4px 4px 4px 8px;
    border-radius: 4px;
    font-size: 13px;
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

  @media (max-width: 480px) {
    span {
      left: calc(100% - 28px);
      transform: translateX(-100%);
      bottom: 0;

      &::before {
        content: '';
        border-width: 6px;
        top: 50%;
        transform: translateY(-50%);
        left: 100%;
        border-color: transparent transparent transparent #ff9000;
      }
    }
  }
`;
