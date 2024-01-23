import PropTypes from "prop-types"
import { Oval } from "react-loader-spinner"

function BlackCircularLoader({height, width}) {
    return (
        <div className="flex justify-center items-center">
            <Oval
                height={height}
                width={width}
                color="#000000"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#808080"
                strokeWidth={5}
                strokeWidthSecondary={5}
            />
        </div>
    )
}

export default BlackCircularLoader

BlackCircularLoader.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}