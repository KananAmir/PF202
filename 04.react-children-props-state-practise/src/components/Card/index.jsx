import PropTypes from "prop-types";
const Card = ({children, cardTitle}) => {
    console.log("children prop", children);
    
  return (
    <div>
        <h2>{cardTitle}</h2>
        {children}
    </div>
  )
}

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default Card