import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';

function Collection({ title, items }) {
    return (
        <div>
            <h1>{title}</h1>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItems }) => (
                    <CollectionItem key={id} {...otherItems} />
                ))}
        </div>
    );
}

export default Collection;
