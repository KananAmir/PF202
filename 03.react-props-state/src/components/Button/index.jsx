import "./index.css"

import PropTypes from 'prop-types';

const Button = ({ textContent, className = "bg-transparent",  handleClick }) => {
    return (
        <button onClick={handleClick} className={`btn ${className}`}>{textContent}</button>
    )
}



Button.propTypes = {
    textContent: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default Button