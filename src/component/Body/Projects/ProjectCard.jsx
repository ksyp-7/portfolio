import React from 'react'
import './projectcard.css'
import {BsGlobe} from 'react-icons/bs'
function ProjectCard({project}) {
  return (
    <div className="projectcard">                       
        < div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
        {
            project.demo && 
            <a className="project-link" href={project.demo }>
                <div className="link-buttos">
                    <BsGlobe />
                    Demo
                </div>
            </a>
        }
        {
            project.github && 
            <a className="project-link" href={project.github }>
                <div className="link-buttos">
                <i class="devicon-github-original colored">Github</i>
                </div>
            </a>     
        }
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
            {
                project.tags.map((tag) => {
                    return (
                        <label className='tags'>{tag}</label>
                    )
                })
            }
        </div>
        </div>
        <img className="project-img" src={project.image} />
    </div>
  )
}

export default ProjectCard