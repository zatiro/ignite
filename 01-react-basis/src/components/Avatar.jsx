/* eslint-disable react/prop-types */
import styles from './Avatar.module.css'

export default function Avatar({ src, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt=""
    />
  )
}
