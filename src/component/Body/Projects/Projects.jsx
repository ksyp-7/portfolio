import React from 'react'
import './project.css'
import Sap from '../../common/Saparater/Saprater'
import {Projectdata} from '../../Data/projectdata'
import ProjectCard from './ProjectCard'
function Projects() {
  const data = Projectdata 
  return (
    <div  className='project'>
      <Sap />
      <label className='section-title'>Projects</label>
      <div>
        {
          data.map((item) =>{
            return <ProjectCard project={item} /> 
          })
        }
      </div>
    </div>
  )
}

export default Projects