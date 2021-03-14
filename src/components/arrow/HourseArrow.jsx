import PropTypes from 'prop-types';

function HourseArrow({ h, min }) {
    return (
        <div className="hour">
             <div className="hr" style={{transform: `rotateZ(${h * 30 + (min * 6 / 12)}deg)`}}></div>
        </div>
    )
}

HourseArrow.propTypes ={
    h: PropTypes.number,
    min: PropTypes.number
}

export default HourseArrow