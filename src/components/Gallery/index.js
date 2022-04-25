import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {

    const { currentCategory } = props;

return (
    <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)} </h1>

    </section>
)

}

export default Gallery;