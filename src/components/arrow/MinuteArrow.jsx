import PropTypes from 'prop-types';

function MinuteArrow({ min }) {
    return (
        <div className="min">
            <div className="mn" style={{transform: `rotateZ(${min * 6}deg)`}}></div>
        </div>
    )
}

MinuteArrow.propTypes ={
    min: PropTypes.number
}

export default MinuteArrow