import styled from 'styled-components'

const Wrapper = styled.div`
    width: 1024px;
    height: 100vh;
    margin: 0 auto;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 1024px) {
        width: 90%
    }
`;

export default Wrapper;
