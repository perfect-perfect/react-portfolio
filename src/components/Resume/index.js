import React from 'react';


function Resume() {
    return (
        <section className='resume'>
            <h1 className='resume-header'>
                <a href='https://drive.google.com/file/d/1mEYXszi4fU6PVAV-Ejjed9OcxsP_BFMH/view?usp=sharing'>Click Here to View My Resume</a>
            </h1>
            <div className='skill-div'>
                <h1>Skills</h1>
                <ul className='skill-list'>
                    <li>JavaScript, HTML, CSS,</li>
                    <li>React, Node.js, Express.js</li>
                    <li>SQL, MySQL, MongoDB, Mongoose, GraphQL</li>
                    <li>Multer, Cloudinary, Service-Worker</li>
                    <li>Markdown, Git, Github Repo</li>
                </ul>
            </div>

        </section>
    )
}

export default Resume;