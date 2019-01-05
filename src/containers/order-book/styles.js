import styled from 'styled-components';

export const Container = styled.div` 
    width: 70%;
`;

export const Controls = styled.div` 
    margin: 0;
    height: 32px;
    width: 70px;
    line-height: 28px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    justify-content: space-between;
    font-size: .9rem;
    padding: 0 0 0 5px;
    overflow: hidden;
    background: black;
    color: white;
    position: relative;
`;

export const Control = styled.div` 
    width: 35px;
    text-align: center;
    color: ${(props) => props.active ? 'white' : '#696060'};
    pointer-events: ${(props) => props.active ? '' : 'none'};
    cursor: ${(props) => props.active ? 'pointer' : 'default'};
`;

export const Books = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: right;
    min-height: 425px;
    background: black;
    color: white;
`;

export const BookBids = styled.div`
    font-size: 11px;
    flex: 1 1;
        opacity: ${(props) => props.loading ? '0.3' : '1'};
    min-width: 270px;
`;

export const BookAsks = styled.div`
    font-size: 11px;
    flex: 1 1;
        opacity: ${(props) => props.loading ? '0.3' : '1'};
    min-width: 270px;
`;

export const BookHeader = styled.div`
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    grid-gap: 2px;
    margin: 0 5px;
    text-transform: uppercase;
`;

export const BookRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
    height: 17px;
`;
