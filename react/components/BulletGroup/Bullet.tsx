import React from 'react'
import { Link } from 'vtex.render-runtime'
import { LinkProps } from './BulletTypes'
import style from  "./styles.css"

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
  descriptionBullet: string
}

const Bullet = ({src, titleBullet, link, descriptionBullet}: Props) => {

  return (
    <div className={`pr4 pl4 ${style.bulletItem}`}>
      <Link
        to = {link.url}
        className = {style.bulletItemLink}
      >
        <img className={`${style.bulletItemImage} externalClass`} src={src} alt={titleBullet} />
        <div className={style.bulletItemDescriptionContainer}>
          <p className={style.bulleItemDescription}>{descriptionBullet}</p>
        </div>
        <div className={style.bulletItemTitleContainer}>
          <p className={style.bulletItemTitle}>{titleBullet}</p>
        </div>
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "Imagen de Bullet",
      type: "string",
      description:"descripcion del bullet",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}

export default Bullet
