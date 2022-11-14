import React from 'react'
import styles from './Image.module.css'

export const Image = ({alt, ...props}) => {

    const [sketelon, setSkeleton] = React.useState(true)

    function handleLoad({target}){
        setSkeleton(false)
        target.style.opacity = 1
    }

  return (
    <div className={styles.wrapper}>
        {sketelon && <div className={styles.sketelon}></div> }
        <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  )
}
