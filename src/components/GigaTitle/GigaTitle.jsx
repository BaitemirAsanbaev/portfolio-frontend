import classes from './GigaTitle.module.scss'

export default function GigaTitle({children, triple}) {
  return (
    <div className={classes.GigaTitle} style={triple&&{transform:"scale(1.2)"}}>{triple?children+children+children:children}</div>
  )
}
