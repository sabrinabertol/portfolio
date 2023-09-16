import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    margin-bottom: 10%; 
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    ${({ active }) =>
        active && `
        font-weight: 900;
    `
    }
    &:hover {
        color: ${({ theme }) => theme.primary + 80};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
    }
`

export const CardContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 960px) {
         grid-template-columns: repeat(2, 1fr);
     }
     @media (max-width: 640px) {
         grid-template-columns: repeat(1, 1fr);
     }
`;