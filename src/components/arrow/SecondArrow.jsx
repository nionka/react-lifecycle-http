import PropTypes from 'prop-types';

function SecondArrow({ sec }) {
    return (
        <div className="sec">
            <div className="sc" style={{transform: `rotateZ(${sec * 6}deg)`}}></div>
        </div>
    )
}

SecondArrow.propTypes ={
    sec: PropTypes.number
}

export default SecondArrow