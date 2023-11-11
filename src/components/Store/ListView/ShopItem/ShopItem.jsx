  
export const ShopItem = (props) => {
    const { item } = props;
  return (
    <div className="main-content">
      <div className="purchase-info">
        <div>
           <img src={item.img} alt="" />
        </div>
        <h2>{item.name}</h2>
        <h3>{item.color}</h3>
        <div className="price">{"$"+item.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}
