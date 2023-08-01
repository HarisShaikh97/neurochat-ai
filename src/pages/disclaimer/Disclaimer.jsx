import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function Disclaimer() {

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96 text-2xl font-semibold">Settings</div>
                <div className="text-2xl font-semibold">Disclaimer</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="my-10 px-10 flex-1 flex flex-col">
                    <div className="text-lg font-medium my-5">Non Clinical Usage</div>
                    <div className="text-gray-500 text-sm">Please note that this software is currently in its alpha version and is not suitable for clinical care nor its intended use. It is intended solely for the purpose of improving research effectiveness and efficiency. So, we strongly suggest against using it as a primary tool for any medical or diagnostic purposes. We do not take responsibility for the accuracy of the results.</div>
                    <div className="text-lg font-medium mt-5">Other</div>
                    <div className="text-lg font-medium uppercase my-5">website discliamer</div>
                    <div className="text-gray-500 text-sm">The information provided by <a href="https://neurocare.ai" className="text-bgblue underline">NeuroCare.Al</a> Inc. ({'"'}we,{'"'} {'"'}us{'"'}, or {'"'}our{'"'}) on <a href="https://neurocare.ai" className="text-bgblue underline">http://neurocare.ai</a> (the {'"'}Site{'"'}) and our mobile application is for general informational purposes only. We publish the website and its content in good faith, taking care to ensure accuracy and currency of information, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, interpretation or completeness of any information on the Site or our mobile application. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.</div>
                    <div className="text-lg font-medium uppercase my-5">external links discliamer</div>
                    <div className="text-gray-500 text-sm">The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</div>
                    <div className="text-lg font-medium uppercase my-5">professional discliamer</div>
                    <div className="text-gray-500 text-sm">The website cannot and does not contain medical/health advice. The medical/health information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate certified professionals. We do not provide any kind of medical/health advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE OR OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.</div>
                    <div className="text-lg font-medium uppercase my-5">medical information discliamer</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>The information about health provided by the Service is not intended to diagnose, treat, cure or prevent disease. Products, services, information, and other content provided by the Service, including information linking to third-party websites are provided for informational purposes only.</div>
                        <div>The information offered by the Service is not comprehensive and does not cover all diseases, ailments, physical conditions, or their treatment.</div>
                        <div>Individuals are different and may react differently to different products. Comments made on the Service by employees or other users are strictly their own personal views made in their own personal capacity and are not claims made by the Company nor do they represent the position or view of the Company.</div>
                        <div>The Company is not liable for any information provided by the Service with regard to recommendations regarding supplements for any health purposes.</div>
                        <div>The Company makes no guarantee or warranty with respect to any products or services sold. The Company is not responsible for any damages for information or services provided even if the Company has been advised of the possibility of damages.</div>
                        <div>This website contains general information about medical conditions and treatments. The information is not advice, and should not be treated as such.</div>
                        <div>The medical information on this website is provided {'"'}as is{'"'} without any representations or warranties, express or implied.</div>
                        <div>You must not rely on the information on this website as an alternative to medical advice from your doctor or other professional healthcare providers.</div>
                        <div>If you have any specific questions about any medical matter, you should consult your doctor or other professional healthcare providers.</div>
                        <div>You should never delay seeking medical advice, disregard medical advice, or discontinue medical treatment because of the information on this website.</div>
                        <div>Nothing in this medical disclaimer will limit any liabilities in any way that is not permitted under applicable law or exclude any liabilities that may not be excluded under applicable law.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">testimonials discliamer</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.</div>
                        <div>The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public.</div>
                        <div>The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials, and users are not paid or otherwise compensated for their testimonials.</div>
                        <div>The testimonials on the Site are not intended, nor should they be construed, as claims that our products and/or services can be used to diagnose, treat, mitigate, cure, prevent or otherwise be used for any disease or medical condition. No testimonials have been clinically proven or evaluated.</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Disclaimer