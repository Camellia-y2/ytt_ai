import React from 'react'
import styles from './home.module.css'

const EntryItem = ({ href, title, desc, img, footer }) => (
  <li className={`${styles.entryItem}`}>
    <a className={`${styles.entryLink}`} href={href}>
      <div className={`${styles.titleRow}`}>{title}</div>
      <div className={`${styles.mainRow}`}>
        <div className={`${styles.mainRowCenter}`}>
          <p>{desc}</p>
          <img src={img} alt="文章封面" />
        </div>
        <div className={`${styles.entryFooter}`}>{footer}</div>
      </div>
    </a>
  </li>
)

export default EntryItem 