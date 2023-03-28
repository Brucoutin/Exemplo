import Link from "next/link"
import styles from '../styles/Navbar.module.css'
export default function Navbar() {
  return (

    <>
      <nav className={styles.navbar}>
        <div>
          <h1>
            Bruna Coutinho
          </h1>
        </div>
        <ul className={styles.linkItem}>
          <li>
            <Link href='/' className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/post' className={styles.link}>
              Post
            </Link>
          </li>
          <li>
            <Link href='/user' className={styles.link}>
              User
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

