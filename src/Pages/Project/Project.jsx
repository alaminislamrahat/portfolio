import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";


const ProjectList = () => {
    const [projectData, setProjectData] = useState([])
 useEffect(()=>{
    
    fetch('./public/data.json')
    .then(res => res.json())
    .then(data => {
        setProjectData(data)
    })
 },[])

  return (
    <div className="min-h-screen  text-white py-10 px-5">
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <Card
            key={index}
           project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
