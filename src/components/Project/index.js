import React, { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            name: 'Budget Tracker',
            deployedUrl: 'https://warm-oasis-55894.herokuapp.com/',
            githubUrl: 'https://github.com/perfect-perfect/budget-tracker'
        },
        {
            name: 'Tech Blog',
            deployedUrl: 'https://damp-cliffs-35712.herokuapp.com/',
            githubUrl: 'https://github.com/perfect-perfect/tech-blog'
        },
        {
            name: 'Note Taker',
            deployedUrl: 'https://gentle-falls-04879.herokuapp.com/notes',
            githubUrl: 'https://github.com/perfect-perfect/note-taker'
        },
        {
            name: 'Comics and Cocktails',
            deployedUrl: 'https://perfect-perfect.github.io/comics-and-cocktails/',
            githubUrl: 'https://github.com/perfect-perfect/comics-and-cocktails'
        },
        {
            name: 'Password Generator',
            deployedUrl: 'https://perfect-perfect.github.io/password-generator/',
            githubUrl: 'https://github.com/perfect-perfect/password-generator'
        },
        {
            name: 'HTML Portfolio',
            deployedUrl: 'https://perfect-perfect.github.io/portfolio/',
            githubUrl: 'https://github.com/perfect-perfect/portfolio'
        }
    ])

    return (
        <div>
            <div >
                {projects.map((image, i) => (
                    <section className="mx-5 my-5">
                        <h1>{image.name}</h1>
                        <img
                            // src={require(`../../assets/portfolio/${i}.png`)}
                            src={require(`../../assets/portfolio/${i}.png`)}
                            alt={image.name}
                            className='img-thumbnail mx-1'
                            // onClick={() =>}
                            key={image.name}
                        /> 
                        <section className="flex-row mx-5">
                            <a href={image.deployedUrl}>Deployed Application</a>
                            |
                            <a href={image.githubUrl}>GitHub Repo</a>
                        </section>
                    </section>
                ))}

            </div>
        </div>
    )
}

export default Project