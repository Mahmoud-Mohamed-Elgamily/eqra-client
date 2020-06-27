import React from 'react'
import styles from './Details.module.css';
import EditWriterData from './EditWriterData';


const Details = ({ name, email, image, followers, following ,isVisitor}) => {
  return (
    <section className={styles.details}>
      <div className={styles.information}>
        <img src={image} alt={`${name}'s profile`} />
        <div className={styles.data}>
          <h3> {name} </h3>
          <p className={styles.sidedata}> you can email me @ {email} </p>
        </div>
      </div>

      <EditWriterData image={image}/>

      <div className={followers}>
        <p className={styles.sidedata}> followers <span> {followers} </span> </p>
        <p className={styles.sidedata}> following <span> {following} </span> </p>
      </div>
    </section>
  )
}

export default Details
