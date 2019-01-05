import styled from 'styled-components';

export const Container = styled.div` 
    width: 70%;
    background: green;
`;


export const Content = styled.div`
    font-size: 11px;
    flex: 1 1;
    min-width: 270px;
`;

export const Header = styled.div`
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    grid-gap: 2px;
    margin: 0 5px;
    text-transform: uppercase;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
    height: 17px;
`;
