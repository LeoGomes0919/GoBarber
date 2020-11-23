import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/signup-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  padding: 0px 16px;

  form {
    display: flex;
    flex-direction: column;
    max-width: 340px;
    margin: 40px 0px;
    width: 100%;

    header {
      text-align: center;
      padding: 0px 0px 24px 0px;

      h1 {
        font-size: 24px;
        line-height: 34px;
      }
    }
  }

  > a {
      color: #f4ede8;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 26px;
      text-decoration: none;
      transition: 0.2s color;

      svg {
        margin-right: 8px;
      }

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const Backgroud = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
