import styled from 'styled-components'

const MovieRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #D3D3D3;
    border-radius: 5px;
    margin-bottom: 1rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export default MovieRow;
