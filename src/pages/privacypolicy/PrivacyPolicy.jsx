import { useNavigate } from "react-router-dom"
import Layout from "../../components/layout/Layout"
import SettingsMenu from "../../components/settingsmenu/SettingsMenu"

function PrivacyPolicy() {

    const navigate = useNavigate()

    return (
        <Layout>
            <div className="flex flex-row items-center gap-5 pl-10">
                <div className="w-96" style={{fontSize: '22px', fontWeight: 'bold'}}>Settings</div>
                <div style={{fontSize: '22px', fontWeight: 'bold'}}>Privacy Policy</div>
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '2px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <SettingsMenu />
                <div className="bg-gray-100" style={{height: '100%', width: '2px'}} />
                <div className="my-10 px-10 flex-1 flex flex-col overflow-y-auto" style={{height: '75vh'}}>
                    <div className="text-lg font-medium my-5">NeuroGPT is owned and operated by {'"'}NeuroCare.AI{'"'}</div>
                    <div className="text-lg font-medium my-5">Privacy Policy</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">Last updated July 21, 2023</div>
                    <div className="text-lg font-medium uppercase my-5">our commitment to privacy</div>
                    <div className="text-gray-500 text-sm">We understand that your privacy is important. Your ability to make informed choices about the uses of your information is important to us. NeuroCare.AI is committed to protecting your privacy and the information that can identify you (“Personal Information”) that you provide as you access and use materials on the Platform and in order to obtain our Services. This Privacy Policy explains our policy regarding the collection, use, disclosure, and protection of Personal Information. By accessing and using Services, you agree and consent to the collection, use and disclosure of your Personal Information as outlined in this privacy statement, unless different terms are specified as part of a special offer or in another form or contract, we provide you in which case such terms will apply. The Platform acts as an intermediary between patients and healthcare providers to improve the lives of patients. We are not a healthcare provider or insurance provider and we does not provide healthcare services or medical advice of any type.</div>
                    <div className="text-lg font-medium uppercase my-5">scope</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>This privacy notice for <a target="_blank" rel="noopener noreferrer" href="https://neurocare.ai" className="text-bgblue underline">NeuroCare.AI</a> Inc. ({'"'}Company,{'"'} {'"'}we,{'"'} {'"'}us,{'"'} or {'"'}our{'"'}), describes how and why we might collect, store, use, and/or share ({'"'}process{'"'}) your information when you use our services ({'"'}Services{'"'}), such as when you:</div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Visit our website at <a target="_blank" rel="noopener noreferrer" href="https://neurocare.ai" className="text-bgblue underline">https://neurocare.ai/</a>, or any website of ours that links to this privacy notice</li>
                            <li>Download and use our mobile application <a target="_blank" rel="noopener noreferrer" href="https://neurocare.ai" className="text-bgblue underline">(NeuroCare.AI)</a>, or any other application of ours that links to this privacy notice</li>
                            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                        </ul>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">questions or concerns?</div>
                    <div className="text-gray-500 text-sm">Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <span className="text-bgblue">support@neurocare.ai</span>.</div>
                    <div className="text-lg font-medium uppercase my-5">summary of key points</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</div>
                        <div className="mt-5 font-semibold">What personal information do we process?</div>
                        <div>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with <a target="_blank" rel="noopener noreferrer" href="https://neurocare.ai" className="text-bgblue underline">NeuroCare.AI</a> Inc. and the Services, the choices you make, and the products and features you use.</div>
                        <div className="mt-5 font-semibold">Do we process any sensitive personal information?</div>
                        <div>We may process sensitive personal information, when necessary, with your consent or as otherwise permitted by applicable law.</div>
                        <div className="mt-5 font-semibold">Do we receive any information from third parties?</div>
                        <div>We do not receive any information from third parties.</div>
                        <div className="mt-5 font-semibold">How do you process my information?</div>
                        <div>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and comply with the law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</div>
                        <div className="mt-5 font-semibold">In what situations and with which parties do you share personal information?</div>
                        <div>We may share information in specific situations and with specific third parties.</div>
                        <div className="mt-5 font-semibold">How do you keep my information safe?</div>
                        <div>We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</div>
                        <div className="mt-5 font-semibold">What are our rights?</div>
                        <div>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</div>
                        <div className="mt-5 font-semibold">How do I exercise my rights?</div>
                        <div>The easiest way to exercise your rights is by filling out our data subject request form available <a target="_blank" rel="noopener noreferrer" href="https://app.termly.io/notify/de38850a-96ac-441b-9af4-f97def67629d" className="text-bgblue underline">here</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</div>
                        <div>Want to learn more about what <a target="_blank" rel="noopener noreferrer" href="https://neurocare.ai" className="underline">NeuroCare.AI</a> Inc. does with any information we collect? Kindly click the details below.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">1. what information do we collect?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>Personal information you disclose to us</div>
                        <div>In Short: We collect personal information that you provide to us.</div>
                        <div>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and services, when you participate in activities on the Services, or otherwise when you contact us.</div>
                        <div className="mt-5"><span className="font-semibold">Personal Information Provided by You.</span> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>names</li>
                            <li>phone numbers</li>
                            <li>email addresses</li>
                            <li>usernames</li>
                            <li>passwords</li>
                            <li>contact preferences</li>
                            <li>contact or authentication data</li>
                            <li>billing addresses</li>
                            <li>debit/credit card numbers</li>
                            <li>social media profile links</li>
                            <li>job titles</li>
                            <li>mailing addresses</li>
                            <li>NPI number</li>
                            <li>Clinical Practice information (including but not limited to phone number, email, and address)</li>
                        </ul>
                        <div className="mt-5">Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Health data</li>
                            <li>Wearable data</li>
                        </ul>
                        <div className="mt-5"><span className="font-semibold">Social Media Login Data.</span> We may provide you with the option to register with us using your existing Apple or Google account details. If you choose to register in this way, we will collect the information described in the section called {'"'}HOW DO WE HANDLE YOUR SOCIAL LOGINS?{'"'} below.</div>
                        <div className="mt-5"><span className="font-semibold">Application Data</span>. If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</div>
                        <div><span className="font-semibold">Geolocation Information.</span> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device{"'"}s settings.</div>
                        <div><span className="font-semibold">Mobile Device Access.</span> We may request access or permission to certain features from your mobile device, including your mobile device{"'"}s Bluetooth, reminders, sensors, social media accounts, storage, calendar, microphone, camera, and other features. If you wish to change our access or permissions, you may do so in your device{"'"}s settings.</div>
                        <div><span className="font-semibold">Mobile Device Data.</span> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information, and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider, and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.</div>
                        <div><span className="font-semibold">Push Notifications.</span> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt-out from receiving these types of communications, you may turn them off in your device{"'"}s settings.</div>
                        <div>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</div>
                        <div>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</div>
                        <div className="font-semibold">Information automatically collected</div>
                        <div>Some information — such as your Internet Protocol (IP) address and/or browser and device.</div>
                        <div>Characteristics — is collected automatically when you visit our Services.</div>
                        <div>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser, and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</div>
                        <div>Like many businesses, we also collect information through cookies and similar technologies. The information we collect includes:</div>
                        <div><span className="font-semibold">Log and Usage Data.</span> Log and usage data are service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called {'"'}crash dumps{'"'}), and hardware settings).</div>
                        <div><span className="font-semibold">Device Data.</span> We collect device data such as information about your computer, phone, tablet, or other devices you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</div>
                        <div><span className="font-semibold">Health & Wearable data.</span> Health & Wearable information is stored on your device via Apple Health (HealthKit) or Google Fit. Information includes but is not limited to vitals, medications, allergies, sleep, activity, etc.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">2. how do we process your information?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div><span className="italic">In Short</span>: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</div>
                        <div>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                            <li>To deliver and facilitate the delivery of services to the user. We may process your information to provide you with the requested service.</li>
                            <li>To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                            <li>To send administrative information to you. We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
                            <li>To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
                            <li>To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
                            <li>To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
                            <li>To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
                            <li>To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
                            <li>To save or protect an individual{"'"}s vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
                        </ul>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">3. what legal bases do we rely on to process your information?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</div>
                        <div className="font-semibold">If you are located in the EU or UK, this section applies to you.</div>
                        <div>The <span className="font-semibold">General Data Protection Regulation (GDPR)</span> and <span className="font-semibold">UK GDPR</span> require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</div>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li><span className="font-semibold">Consent</span>. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click here to learn more.</li>
                            <li><span className="font-semibold">Performance of a contract</span>. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                            <li><span className="font-semibold">Legitimate Interests</span>. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:</li>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Analyze how our services are used so we can improve them to engage and retain users</li>
                                <li>Diagnose problems and/or prevent fraudulent activities</li>
                                <li>Understand how our users use our products and services so we can improve user experience</li>
                            </ul>
                            <li><span className="font-semibold">Legal Obligations</span>. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                            <li><span className="font-semibold">Vital Interests</span>. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                        </ul>
                        <div className="font-semibold">If you are located in Canada, this section applies to you.</div>
                        <div>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. Email your withdraw request to <span className="text-bgblue">support@neurocare.ai</span>. We may need some more information to verify your identify and confirm the request. In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                            <li>For investigations and fraud detection and prevention</li>
                            <li>For business transactions provided certain conditions are met</li>
                            <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                            <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                            <li>If we have reasonable grounds to believe an individual has been, is, or maybe a victim of financial abuse</li>
                            <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                            <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                            <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                            <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                            <li>If the information is publicly available and is specified by the regulations</li>
                        </ul>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">4. when and with whom do we share your personal information?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>We share your personal information with the following categories of third-parties, where applicable:</div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><span className="font-semibold">Advisers and financial institutions</span>, including, legal, tax, auditors, risk and compliance, notaries, and business continuity support services;</li>
                            <li><span className="font-semibold">Service providers and suppliers</span>, including, IT outsourcing, marketing, and applicant management. In some instances, service providers will be directly responsible to you for their use of your personal information. They may be obliged by law to provide you with additional information regarding the personal information that they hold about you and how and why they process that information. Further information may be provided to you in a separate notice or may be obtained from such service providers directly, for example, via their websites;</li>
                            <li>Where permitted by applicable laws,<span className="font-semibold">with third parties in connection</span> with a corporate restructuring, sale, transfer or assignment of assets or business, merger, divestiture, or other changes to the company’s control or financial status (or any of our affiliates); and</li>
                            <li><span className="font-semibold">Government bodies</span> and dispute resolution and law enforcement organizations, as applicable.</li>
                            <li><span className="font-semibold">Affiliates</span>. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
                        </ul>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">5. do we use cookies and other tracking technologies?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>We may use cookies and other tracking technologies to collect and store your information.</div>
                        <div>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">6. how do we handle your social logins?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</div>
                        <div>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</div>
                        <div>We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">7. is your information transferred internationally?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div className="italic">In Short: We may transfer, store, and process your information in countries other than your own.</div>
                        <div className="mt-5">Our servers are located in the United States. If you are accessing our Services from outside the United States, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see {'"'}WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?{'"'} ), in the United States, and other countries.</div>
                        <div>If you are a resident in the European Economic Area (EEA) or United Kingdom (UK), then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</div>
                        <div className="font-semibold mt-5">European Commission{"'"}s Standard Contractual Clauses:</div>
                        <div>We have implemented measures to protect your personal information, including by using the European Commission{"'"}s Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">8. how long do we keep your information?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div className="italic">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</div>
                        <div>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than twelve (12) months past the termination of the user{"'"}s account. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">9. how do we keep your information safe?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div className="italic">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</div>
                        <div>We have implemented appropriate technical and organizational security measures to protect the personal information that we have under our control from unauthorized access, use, disclosure and accidental loss. When you enter personal information, we encrypt the transmission of that information or use SSL connections (Secure Socket Layer) technology. You are solely responsible for maintaining the security and confidentiality of your account username and password. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, the transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">10. what are privacy rights?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div className="italic">In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</div>
                        <div>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below.</div>
                        <div>We will consider and act upon any request in accordance with applicable data protection laws.</div>
                        <div>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a target="_blank" rel="noopener noreferrer" href="https://ec.europa.eu/newsroom/article29/items/612080" className="text-bgblue underline">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a></div>
                        <div>If you are located in Switzerland, the contact details for the data protection authorities are available here: <a target="_blank" rel="noopener noreferrer" href="https://www.edoeb.admin.ch/edoeb/en/home.html" className="text-bgblue underline">https://www.edoeb.admin.ch/edoeb/en/home.html</a></div>
                        <div>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <span className="text-bgblue underline">{'"'}HOW CAN YOU CONTACT US ABOUT THIS NOTICE?{'"'}</span> below or by updating your preferences.</div>
                        <div>However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</div>
                        <div>Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying “STOP” or “UNSUBSCRIBE” to the SMS messages that we send, or by contacting us using the details provided in the section <span className="text-bgblue underline">{'"'}HOW CAN YOU CONTACT US ABOUT THIS NOTICE?{'"'}</span> below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</div>
                        <div>Account Information</div>
                        <div>If you would at any time like to review or change the information in your account or terminate your account, you can:</div>
                        <div>Log in to your account settings and update your user account.</div>
                        <div>Contact us using the contact information provided.</div>
                        <div>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</div>
                        <div>Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services**. To opt out of interest-based advertising by advertisers on our Services visit <a href="https://optout.aboutads.info/?c=2&lang=EN" className="text-bgblue underline">http://www.aboutads.info/choices/</a>.**</div>
                        <div>If you have questions or comments about your privacy rights, you may email us at <span className="text-bgblue">support@neurocare.ai</span>.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">11. controls for do-not-track features</div>
                    <div className="text-gray-500 text-sm">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ({'"'}DNT{'"'}) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</div>
                    <div className="text-lg font-medium uppercase my-5">12. do california residents have specific privacy rights?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</div>
                        <div>California Civil Code Section 1798.83, also known as the {'"'}Shine The Light{'"'} law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</div>
                        <div>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request the removal of unwanted data that you publicly post on the Services. To request the removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</div>
                        <div>CCPA Privacy Notice</div>
                        <div>The California Code of Regulations defines a {'"'}resident{'"'} as:</div>
                        <div>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</div>
                        <div>(2) every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</div>
                        <div>All other individuals are defined as {'"'}non-residents{'"'}.</div>
                        <div>If this definition of {'"'}resident{'"'} applies to you, we must adhere to certain rights and obligations regarding your personal information.</div>
                        <div>What categories of personal information do we collect?</div>
                        <div>We have collected the following categories of personal information in the past twelve (12) months:</div>
                    </div>
                    <div className="w-[500px] mt-20 mb-10 border border-gray-300 text-gray-500">
                        <div className="h-10 grid grid-cols-3 border border-gray-300">
                            <div className="border border-gray-300 flex items-center justify-center">Category</div>
                            <div className="border border-gray-300 flex items-center justify-center">Examples</div>
                            <div className="border border-gray-300 flex items-center justify-center">Collected</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">A. Identifiers</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Yes</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">B. Personal information categories listed in the California Customer Records statute</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Name, contact information, education, employment, employment history, and financial information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Yes</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">C. Protected classification characteristics under California or federal law</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Gender and date of birth</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Yes</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">D. Commercial information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Transaction information, purchase history, financial details, and payment information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">No</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">E. Biometric information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Fingerprints and voiceprints</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">No</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">F. Internet or other similar network activity</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">No</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">G. Geolocation data</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Device location</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Yes</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">H. Audio, electronic, visual, thermal, olfactory, or similar information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Images and audio, video or call recordings created in connection with our business activities</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Yes</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">I. Professional or employment-related information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Yes</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">J. Education Information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Student records and directory information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">No</div>
                        </div>
                        <div className="grid grid-cols-3 border border-gray-300 text-sm">
                            <div className="border border-gray-300 flex items-center justify-center text-center">K. Inferences drawn from other personal information</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</div>
                            <div className="border border-gray-300 flex items-center justify-center text-center">No</div>
                        </div>
                    </div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:</div>
                        <div>Receiving help through our customer support channels;</div>
                        <div>Participation in customer surveys or contests; and</div>
                        <div>Facilitation in the delivery of our services and responding to your inquiries.</div>
                        <div>How do we use and share your personal information?</div>
                        <div>More information about our data collection and sharing practices can be found in this privacy notice.</div>
                        <div>You may contact us by email at <span className="text-bgblue">support@neurocare.ai</span>, or by referring to the contact details at the bottom of this document.</div>
                        <div>If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</div>
                        <div>Will your information be shared with anyone else?</div>
                        <div>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</div>
                        <div>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be {'"'}selling{'"'} of your personal information.</div>
                        <div><a target="_blank" rel="noopener noreferrer" href="https://neurocare.ai" className="text-bgblue underline">NeuroCare.AI</a> Inc. has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. <a target="_blank" rel="noopener noreferrer" href="https://neurocare.ai" className="text-bgblue underline">NeuroCare.AI</a> Inc. will not sell personal information in the future belonging to website visitors, users, and other consumers.</div>
                        <div>Your rights with respect to your personal data</div>
                        <div>Right to request deletion of the data — Request to delete</div>
                        <div>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</div>
                        <div>Right to be informed — Request to know</div>
                        <div>Depending on the circumstances, you have a right to know:</div>
                        <div>whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used;</div>
                        <div>whether we sell your personal information to third parties; the categories of personal information that we sold or disclosed for a business purpose;</div>
                        <div>the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and the business or commercial purpose for collecting or selling personal information.</div>
                        <div>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</div>
                        <div>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</div>
                        <div>We will not discriminate against you if you exercise your privacy rights.</div>
                        <div>Verification process</div>
                        <div>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</div>
                        <div>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</div>
                        <div>Other privacy rights</div>
                        <div>You may object to the processing of your personal information.</div>
                        <div>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</div>
                        <div>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</div>
                        <div>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</div>
                        <div>To exercise these rights, you can contact us by email at <span className="text-bgblue">support@neurocare.ai</span>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">13. do we make updates to this notice?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div className="italic">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</div>
                        <div>We may update this privacy notice from time to time. The updated version will be indicated by an updated {'"'}Revised{'"'} date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">14. how can you contact us about this notice?</div>
                    <div className="text-gray-500 text-sm flex flex-col gap-3">
                        <div>If you have questions or comments about this notice, you may email us at <span className="text-bgblue">support@neurocare.ai</span> or by post to:</div>
                        <div><a target="_blank" rel="noopener noreferrer" href="https://neurocare.ai" className="text-bgblue underline">NeuroCare.AI</a> Inc.</div>
                        <div>7548 Preston Rd, STE 141 PMB 1149</div>
                        <div>STE 141 PMB 1149</div>
                        <div>Frisco, TX 75034</div>
                        <div>United States</div>
                    </div>
                    <div className="text-lg font-medium uppercase my-5">15. how can you review, update, or delete the data we collected from you?</div>
                    <div className="text-gray-500 text-sm">Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a email us at <span className="text-bgblue">support@neurocare.ai</span></div>
                    <div className="flex justify-end w-full pt-20">
                        <button onClick={() => {navigate('/settings/legaldocuments')}} className="bg-bgblue text-white rounded-3xl" style={{height: '56px', width: '343px', fontSize: '16px', fontWeight: 'bold'}}>I Understand</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PrivacyPolicy