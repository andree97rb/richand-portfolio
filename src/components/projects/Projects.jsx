import { useEffect, useState } from 'react';
import Card from '../card/Card'
import './projects.css'

const Projects = ({repo = []}) => {
   
    return ( 
        <div className="projects-container">
            {repo.map((item, index) => (
                <Card key={index} item={item} index={index}></Card>
            ))}
        </div>
     );
}
 
export default Projects;