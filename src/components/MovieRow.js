import styled from 'styled-components'

const MovieRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    border: 1px dashed black;
    margin-bottom: 1rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export default MovieRow;
