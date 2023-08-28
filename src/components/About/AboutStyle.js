import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 180px;
  text-align: center;
  line-height: 130px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 640px) {
    font-size: 60px;
    line-height: 45px;
    margin-bottom: 8px;
  }
`;

export const BigTitle = styled.div`
  font-weight: 900;
  font-size: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 640px) {
    font-size: 200px;
    margin-bottom: 8px;
  }
`;

