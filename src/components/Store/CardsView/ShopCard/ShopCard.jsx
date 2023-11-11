  
export const ShopCard = (props) => {
    const { item } = props;
  return (
    <div className="main-content">
      <h2>{item.name}</h2>
      <h3>{item.color}</h3>
      <div>
         <img src={item.img} alt="" />
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{"$"+item.price}</div>
        <button>ADD TO CARD</button>
      </div>
    </div>
  )
}
