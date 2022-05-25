import React, { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            name: 'Curb Alert',
            description: "A user-based free classifieds application specializing in turnings one's trash into another's treasure. A place where you can post the things you no longer need and gift them to a new home. You simply create an account, upload a photo and description of the item. The item is then added to a public feed where fellow Curb Alert users can contact you to arrange pick up. This was a group project where I and another student established all of the back-end. I created all the user-facing functionality (create an account, upload user avatar, add posts, delete posts, contact other users.",
            technology: "React, JavaScript, Node, Express, GraphQL, MongoDB, Mongoose, and Chakra UI.",
            deployedUrl: 'https://powerful-basin-06230.herokuapp.com/',
            githubUrl: ''
        },
        {
            name: 'Budget Tracker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            technology: "Place holder",
            deployedUrl: 'https://warm-oasis-55894.herokuapp.com/',
            githubUrl: 'https://github.com/perfect-perfect/budget-tracker'
        },
        {
            name: 'Tech Blog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            technology: "Place holder",
            deployedUrl: 'https://damp-cliffs-35712.herokuapp.com/',
            githubUrl: 'https://github.com/perfect-perfect/tech-blog'
        },
        {
            name: 'Note Taker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            technology: "Place holder",
            deployedUrl: 'https://gentle-falls-04879.herokuapp.com/notes',
            githubUrl: 'https://github.com/perfect-perfect/note-taker'
        },
        {
            name: 'Comics and Cocktails',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            technology: "Place holder",
            deployedUrl: 'https://perfect-perfect.github.io/comics-and-cocktails/',
            githubUrl: 'https://github.com/perfect-perfect/comics-and-cocktails'
        },
        {
            name: 'Password Generator',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            technology: "Place holder",
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
                            <p className="project-description">{project.description}</p>
                            <p><strong>Technologies:</strong>{' '}{project.technology}</p>
                            <div className="links">
                                <a href={project.deployedUrl} className="link" target="blank">Deployed Application</a>
                                
                                <a href={project.githubUrl} className="link" target="blank">GitHub Repo</a>
                            </div>
                        </div>
                        <div className="project-image">
                            <img
                                src={require(`../../assets/portfolio/${i}.png`)}
                                alt={project.name}
                                className='img-thumbnail mx-1'
                                key={project.name}
                            /> 
                        </div>

                    </section>
                ))}

            </div>
        </div>
    )
}

export default Project