import PropTypes from "prop-types"

function BlackCircularLoader({height, width}) {
    return (
        <div className="flex justify-center items-center">
            <div className="border-t-4 border-black border-solid rounded-full animate-spin" style={{height: height, width: width}}></div>
        </div>
    )
}

export default BlackCircularLoader

BlackCircularLoader.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}