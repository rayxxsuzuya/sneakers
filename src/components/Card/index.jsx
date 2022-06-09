import styles from './Card.module.scss';

console.log(styles);

const Card = ({title, price, imageUrl}) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
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
        <button className="button" onClick={() => {alert(`Вы нажали на товар с названием:\n ${title}`)}}>
          <img width={11} height={11} src="/img/plus.svg" alt="+" />
        </button>
      </div>
    </div>
  )
}

export default Card