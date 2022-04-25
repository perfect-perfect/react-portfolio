import React, { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            name: 'Project 1'
        },
        {
            name: 'Project 2'
        },
        {
            name: 'Project 3'
        },
        {
            name: 'Project 4'
        },
        {
            name: 'Project 5'
        },
        {
            name: 'Project 6'
        }
    ])

    return (
        <div>
            <div className='flex-row'>
                {projects.map((image, i) => (
                    <img
                        src={require(`../../assets/portfolio/${i}.png`)}
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        // onClick={() =>}
                        key={image.name}
                    />    
                ))}

            </div>
        </div>
    )
}

export default Project