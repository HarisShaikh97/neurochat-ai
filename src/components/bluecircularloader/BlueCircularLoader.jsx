import PropTypes from "prop-types"

function BlueCircularLoader({height, width}) {
    return (
        <div className="flex justify-center items-center">
            <div className="border-t-4 border-bgblue border-solid rounded-full animate-spin" style={{height: height, width: width}}></div>
        </div>
    )
}

export default BlueCircularLoader

BlueCircularLoader.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}