import React from 'react';
import styled from '@emotion/styled';
import Category from '../category/Category';

function Home() {
    return (
        <HomeStyle>
            <Category />
        </HomeStyle>
    );
}

export default Home;

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`;
