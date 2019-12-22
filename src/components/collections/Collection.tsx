import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import styled from '@emotion/styled';

function Collection({ title, items }) {
    return (
        <CollectionStyle>
            <TitleStyle>{title}</TitleStyle>
            <PreviewStyle>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItems }) => (
                        <CollectionItem key={id} {...otherItems} />
                    ))}
            </PreviewStyle>
        </CollectionStyle>
    );
}

export default Collection;

//Styles
const CollectionStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const TitleStyle = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`;

const PreviewStyle = styled.div`
    display: flex;
    justify-content: space-between;
`;
