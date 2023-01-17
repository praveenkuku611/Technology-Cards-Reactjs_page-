import './index.css'

const CardItem = props => {
  const {cardItemDetails} = props
  const {title, description, imgUrl, className} = cardItemDetails
  return (
    <li className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} className="img_src" alt={title} />
    </li>
  )
}

export default CardItem
