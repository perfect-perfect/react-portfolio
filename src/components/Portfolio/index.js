import React from 'react';
import Project from '../Project'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio (props) {

    const { currentCategory } = props;

return (
    <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)} </h1>
        <Project></Project>

    </section>
)

}

export default Portfolio;