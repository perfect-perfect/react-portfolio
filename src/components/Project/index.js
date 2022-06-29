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
            name: 'Incite',
            description: 'A social media page where you can submit coding questions to the community. The community can then provide answers. Questions and answers are displayed in order by vote . User submitted questions can contain both text and images. ',
            technology: "JavaScript, Node, Express, MySQL, SQL, Handlebars, Multer, Cloudinary, CSS.",
            deployedUrl: 'https://stormy-dawn-68480.herokuapp.com/',
            githubUrl: 'https://github.com/perfect-perfect/incite'
        },
        {
            name: 'Budget Tracker',
            description: 'An progressive web app to help users keep and maintain a budget.',
            technology: "JavaScript, Mongoose, Node, Express, Service-Worker, HTML, CSS ",
            deployedUrl: 'https://warm-oasis-55894.herokuapp.com/',
            githubUrl: 'https://github.com/perfect-perfect/budget-tracker'
        },
        {
            name: 'Tech Blog',
            description: "A social media website where user's can write and publish blog-posts to the community. Community members can then comment on blog posts.",
            technology: "JavaScript, Node, Express, MySQL, SQL, Handlebars, CSS.",
            deployedUrl: 'https://damp-cliffs-35712.herokuapp.com/',
            githubUrl: 'https://github.com/perfect-perfect/tech-blog'
        },
        {
            name: 'Note Taker',
            description: 'A website where you can take "To Do" to help keep you on task.',
            technology: "JavaScript, Express, Node, UUID, JSON Database, HTML, CSS",
            deployedUrl: 'https://gentle-falls-04879.herokuapp.com/notes',
            githubUrl: 'https://github.com/perfect-perfect/note-taker'
        },
        {
            name: 'Password Generator',
            description: 'Generate randomized passwords between 8-128 characters. Includes letters, numbers, capitalization, and special characters',
            technology: "JavaScript, HTML, CSS",
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