import { useRef, useState } from "react"
import PropTypes from "prop-types"
import { XMarkIcon } from "@heroicons/react/24/solid"
import synaptiquery from "../../assets/icons/synaptiquery.svg"
import chatgpt from "../../assets/icons/chatgpt.svg"
import claudeai from "../../assets/icons/claudeai.svg"
import palm2 from "../../assets/icons/palm2.svg"
import falcon from "../../assets/icons/falcon.svg"
import copy from "../../assets/icons/copy.png"
import copyWhite from "../../assets/icons/copy-white.png"

function TranslationPopup({setShowTranslationPopup, translatedText, setTranslatedText, modelType}) {

    const divRef = useRef(null)

    const [copied, setCopied] = useState(false)
    
    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(translatedText)
            // console.log('Text copied to clipboard:', translatedText)
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, [100])
        } catch (error) {
            console.error('Error copying text:', error)
        }
    }

    return (
        <div className="absolute top-1/2 left-1/2 h-full w-full transform -translate-x-1/2 -translate-y-1/2 backdrop-brightness-50 backdrop-blur z-50 flex justify-center pt-[35vh]">
            <div className="w-full h-fit mx-10 px-10 py-5 bg-white rounded-xl shadow-xl flex flex-col gap-5 items-center justify-center">
                <div className="flex flex-row justify-between w-full">
                    <div />
                    <button onClick={() => {
                        setTranslatedText('')
                        setShowTranslationPopup(false)
                        }}
                    >
                        <XMarkIcon className="h-5 w-5 text-bgblue" />
                    </button>
                </div>
                <div className="flex flex-row items-center font-medium gap-5 w-full">
                    <div>
                        {modelType === 'synaptiquery' && <img alt={modelType} src={synaptiquery} style={{height: '40px'}} />}
                        {modelType === 'chatgpt' && <img alt={modelType} src={chatgpt} style={{height: '40px'}} />}
                        {modelType === 'claudeai' && <img alt={modelType} src={claudeai} style={{height: '40px'}} />}
                        {modelType === 'palm2' && <img alt={modelType} src={palm2} style={{height: '40px'}} />}
                        {modelType === 'falcon' && <img alt={modelType} src={falcon} style={{height: '40px'}} />}
                    </div>
                    {modelType === 'synaptiquery' && (<div>SynaptiQuery</div>)}
                    {modelType === 'chatgpt' && <div>ChatGPT</div>}
                    {modelType === 'claudeai' && <div>Claude.AI</div>}
                    {modelType === 'palm2' && <div>PaLM2</div>}
                    {modelType === 'falcon' && <div>Falcon40B</div>}
                </div>
                <div ref={divRef} className="text-sm font-light">{translatedText}</div>
                <div className="flex justify-end w-full">
                    {copied ? (
                        <div className="rounded-full h-7 w-12 flex items-center justify-center bg-bgblue">
                            <img alt="copy" src={copyWhite} style={{height: '20px'}} />
                        </div>
                    ) : (
                        <button onClick={handleCopyClick} className="rounded-full h-7 w-12 flex items-center justify-center border border-bgblue">
                            <img alt="copy" src={copy} style={{height: '20px'}} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TranslationPopup

TranslationPopup.propTypes = {
    setShowTranslationPopup: PropTypes.func.isRequired,
    translatedText: PropTypes.string.isRequired,
    setTranslatedText: PropTypes.func.isRequired,
    modelType: PropTypes.string.isRequired
}