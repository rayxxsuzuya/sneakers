const Drawer = ({onClose, items = []}) => {
  return (
    <div className="overlay">
      <div className="drawer
      d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" />
        </h2>

        <div className="items flex">
          {
            items.map(el => {
              return (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${el.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{el.title}</p>
                    <b>{el.price} руб.</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
                </div>
              );
            })
          }
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
        </div>
      </div>
    </div>
  )
}

export default Drawer