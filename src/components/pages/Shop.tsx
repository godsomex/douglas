import React, { useState } from 'react';

import shopData from './shopData';
import Collection from '../collections/Collection';

function Shop() {
    const [collections, setcCllections] = useState(shopData);

    return (
        <div>
            {collections.map(({ id, ...otherColections }) => (
                <Collection key={id} {...otherColections} />
            ))}
        </div>
    );
}

export default Shop;
