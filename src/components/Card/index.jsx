import styles from './Card.module.scss';
import { useState } from 'react';

const Card = ({title, price, imageUrl, onFavorite, onPlus}) => {

  const [checked, setChecked] = useState(false);

  function onClickPlus() {
    onPlus({title, price, imageUrl});
    setChecked(!checked)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <div style={{textAlign: 'center'}}>
        <img
          width={133}
          height={112}
          src={imageUrl}
          alt="Sneakers"
        />
      </div>
      <h5>{ title }</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{ price } руб.</b>
        </div>
        <img className={styles.plus} src={!checked ? "/img/btn-plus.svg" : "/img/btn-checked.svg"} alt="+" onClick={onClickPlus} />
      </div>
    </div>
  )
}

export default Card