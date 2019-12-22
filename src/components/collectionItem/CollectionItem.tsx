import React from 'react';
import styled from '@emotion/styled';

function CollectionItem({ id, name, price, imageUrl }) {
    return (
        <ItemStyle>
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </ItemStyle>
    );
}

export default CollectionItem;

const ItemStyle = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;

    .image {
        width: 100%;
        height: 95%;
        background-size: cover;
        background-position: center;
        margin-bottom: 5px;
    }

    .collection-footer {
        width: 100%;
        height: 5%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;

        .name {
            width: 90%;
            margin-bottom: 15px;
        }

        .price {
            width: 10%;
        }
    }
`;
