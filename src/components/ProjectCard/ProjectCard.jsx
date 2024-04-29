import { api } from "../../api";
import classes from "./ProjectCard.module.scss";
export default function ProjectCard({ data }) {
  console.log(data);
  return (
    <div
      className={classes.ProjectCard}
      style={{
        background: `linear-gradient(125deg, ${data.color1} 0%, ${data.color2} 50%, ${data.color3} 100%)`,
      }}
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${api + "/" + data.image})` }}
      ></div>
      <div className={classes.info}>
        <div className={classes.left}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className={classes.right}>
          <div className={classes.tags}>
          
            {data.tags.map((item, index)=>{
              return <div key={index} className={classes.tag}>{item}</div>
            })}
          </div>
          <div className={classes.links}>
          <a href={data.githubLink}>GitHub</a>
          <a style={{backgroundColor:data.color2}} href={data.siteLink}>Open</a>
          </div>
        </div>
      </div>
    </div>
  );
}
