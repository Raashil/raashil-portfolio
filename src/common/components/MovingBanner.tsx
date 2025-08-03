import React from 'react';
import styles from './MovingBanner.module.css';

const MovingBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.text}>Howdy! • Open to new opportunities •Howdy! • Open to new opportunities</p>
    </div>
  );
};

export default MovingBanner;