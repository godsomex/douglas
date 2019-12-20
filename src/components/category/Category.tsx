import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import styled from '@emotion/styled';

function Category() {
    const [sections, setSections] = useState([
        {
            title: 'men',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl: 'men',
            id: 1,
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: '',
            id: 2,
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl: '',
            id: 3,
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            linkUrl: '',
            size: 'large',
            id: 4,
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            linkUrl: '',
            size: 'large',
            id: 5,
        },
    ]);
    return (
        <CategoryStyle>
            {sections.map(({ id, ...catergoryProps }) => (
                <MenuItem key={id} {...catergoryProps} />
            ))}
        </CategoryStyle>
    );
}

export default Category;

const CategoryStyle = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
