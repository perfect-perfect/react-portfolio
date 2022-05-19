import React, { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            name: 'Curb Alert',
            deployedUrl: 'https://powerful-basin-06230.herokuapp.com/',
            githubUrl: ''
        },
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
        }
    ])

    return (
        <div>
            <div >
                {projects.map((project, i) => (
                    <section className="project-item">
                        <div className="project-info">
                            <h2 className="project-header">{project.name}</h2>
                            <p className="project-ddescription">{project.description}</p>
                        </div>
                        
                        <img
                            src={require(`../../assets/portfolio/${i}.png`)}
                            alt={project.name}
                            className='img-thumbnail mx-1'
                            key={project.name}
                        /> 
                        <section className="flex-row mx-1">
                            <a href={project.deployedUrl} target="blank">Deployed Application</a>
                            |
                            <a href={project.githubUrl} target="blank">GitHub Repo</a>
                        </section>
                    </section>
                ))}

            </div>
        </div>
    )
}

export default Project