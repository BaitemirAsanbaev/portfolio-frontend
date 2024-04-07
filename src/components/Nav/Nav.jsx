import classes from './Nav.module.scss'
export default function Nav() {
  return (
    <nav className={classes.Nav}>
        <a href="#gallery">Gallery</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#cv">CV</a>
        <a href="#contacts">Contacts</a>
    </nav>
  )
}
