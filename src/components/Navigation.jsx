import Link from 'next/link'
import styles from './Navigation.module.css'

const links = [{
  label: 'Home',
  href: '/'
}, {
  label: 'About',
  href: '/about'
}, {
  label: 'Posts',
  href: '/posts'
}]

export default function Navigation () {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link href={href}> {label} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
