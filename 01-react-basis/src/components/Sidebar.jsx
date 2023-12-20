import Avatar from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://media.licdn.com/dms/image/D4E16AQHhsuGo0nTk_A/profile-displaybackgroundimage-shrink_200_800/0/1700259542137?e=1708560000&v=beta&t=NUGOZBrTlTRkmsVpFQ6mdd4wfgio42_7E61juGsM-1s"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/zatiro.png" />

        <strong>Tiago Cardoso</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
