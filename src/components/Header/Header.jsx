import Nav from "../Nav/Nav";
import classes from "./Header.module.scss";
import logo from '../../assets/logo.svg'
export default function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.info}>
        <Nav />
        <p>
          I'm <span className={classes.orange}>Baitemir Asanbaev</span>, a <span className={classes.blue}>fullstack developer</span> with <span className={classes.darkgreen}>over 3 years</span> of
          practical experience, and a few <span className={classes.green}>commercial experience</span>. Mostly I
          specify on frontend development, but consider myself as fullstack,
          because I can maintain both <span className={classes.red}>backend</span> <span className={classes.blue}>and</span> <span className={classes.pink}>frontend</span> parts, and I'm
          familiar with entire process of <span className={classes.purple}>web development</span>
        </p>
      </div>
      <div className={classes.card}>
        <img src={logo} alt="logo"/>
        <div className={classes.explore}>
            <a href="#projects">Explore projects</a>
        </div>
      </div>
    </div>
  );
}
