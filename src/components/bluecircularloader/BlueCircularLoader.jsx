import PropTypes from "prop-types"
import { Oval } from "react-loader-spinner"

function BlueCircularLoader({height, width}) {
    return (
        <div className="flex justify-center items-center">
            <Oval
                height={height}
                width={width}
                color="#1A4ADA"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#E2E7F6"
                strokeWidth={5}
                strokeWidthSecondary={5}
            />
        </div>
    )
}

export default BlueCircularLoader

BlueCircularLoader.propTypes = {
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
}