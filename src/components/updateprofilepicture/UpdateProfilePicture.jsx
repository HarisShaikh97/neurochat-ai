import { useState, useContext } from "react"
import PropTypes from "prop-types"
import { API, graphqlOperation, Storage } from "aws-amplify"
import { updateUserData } from "../../graphql/mutations"
import { MyContext } from "../../context/context"

function UpdateProfilePicture({setShowUpdateProfilePicture}) {

    const awsBucket = import.meta.env.VITE_AMAZON_BUCKET_NAME

    const { state, dispatch } = useContext(MyContext)

    const [selectedFile, setSelectedFile] = useState(null)
    const [dragOver, setDragOver] = useState(false)

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const handleDragEnter = (e) => {
        e.preventDefault()
        setDragOver(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setDragOver(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setDragOver(false)

        const file = e.dataTransfer.files[0]
        setSelectedFile(file)
    }

    const handleUpload = async (e) => {
        e.preventDefault()
        if(selectedFile) {

            try {
                const response = await Storage.put(selectedFile.name, selectedFile)

                const imgUrl = `https://${awsBucket}.s3.amazonaws.com/public/${response?.key}`

                let info = {
                    id: state?.user_info?.id,
                    firstName: state?.user_info?.firstName,
                    lastName: state?.user_info?.lastName,
                    organization: state?.user_info?.organization,
                    profession: state?.user_info?.profession,
                    email: state?.user_info?.email,
                    secondaryEmail: state?.user_info?.secondaryEmail,
                    profilePicUrl: imgUrl,
                    phoneNumber: state?.user_info?.phoneNumber,
                    userId: state?.user_info?.userId
                }
                
                const updatedUserData = await API.graphql(graphqlOperation(updateUserData, { input: info}))

                if(updatedUserData?.data?.updateUserData) {
                    dispatch({
                        type: 'SET_USER_INFO',
                        payload: updatedUserData?.data?.updateUserData
                    })
                }
                setShowUpdateProfilePicture(false)
                // console.log(updatedUserData, imgUrl)
            } 
            catch (error) {
                console.error('Error:', error)
            }
        }
    }

    console.log(dragOver)

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur flex justify-center pt-[20vh] z-50">
            <div className="w-fit h-fit p-10 bg-bglightblue rounded-xl shadow-xl flex flex-col gap-8 items-center justify-center">
                <div className="text-bgblue font-medium">Upload Profile Picture</div>
                <div onDragEnter={handleDragEnter} onDragOver={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop} className="rounded-xl bg-white h-40 w-96 flex items-center justify-center">
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    {selectedFile ? (
                        <img alt="image" src={URL.createObjectURL(selectedFile)} style={{maxHeight: '100px', maxWidth: '150px'}} />
                    ) : (
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <img alt="image" src="/src/assets/icons/upload-image.png" style={{height: '50px', width: '50px'}} />
                            <div className="font-semibold text-gray-500">Drag and drop here...</div>
                        </div>
                    )}
                </div>
                <div className="flex flex-row w-full px-20 justify-between">
                    <button onClick={() => {setShowUpdateProfilePicture(false)}} className="rounded-full bg-white border border-gray-300 text-sm h-8 w-20" >Cancel</button>
                    <button onClick={handleUpload} className="rounded-full bg-bgblue text-white text-sm h-8 w-20" >Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfilePicture

UpdateProfilePicture.propTypes = {
    setShowUpdateProfilePicture: PropTypes.func.isRequired
}

