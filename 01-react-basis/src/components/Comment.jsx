/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export default function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/zatiro.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tiago Cardoso</strong>
              <time
                title="17 de Dezembro de 2023, às 21:55"
                dateTime="2023-12-17 21:55:46"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
