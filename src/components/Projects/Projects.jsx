import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { getProjects } from "../../services/ProjectsService";
import classes from './Projects.module.scss'
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjets() {
      try {
        const res = await getProjects();
        setProjects(res);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProjets();
  }, []);
  return (
      <div className={classes.Projects}>
        {projects.map((item, index) => {
          return <ProjectCard key={index} data={item}/>
        })}
      </div>
  );
}
