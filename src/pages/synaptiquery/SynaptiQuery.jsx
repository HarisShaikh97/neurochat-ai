import { useState } from "react"
import { PlusIcon } from "@heroicons/react/24/solid"
import { ChevronUpIcon } from "@heroicons/react/24/solid"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Layout from "../../components/layout/Layout"

function SynaptiQuery() {

    const [agreed, setAgreed] = useState(false)
    const [showStarredChats, setShowStarredChats] = useState(true)
    const [showAllChats, setShowAllChats] = useState(true)
    const [selectedChat, setSelectedChat] = useState(null)

    let chats = [
        {
            id: 1,
            title: 'Psychopathology, also...',
            starred: true,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        },
        {
            id: 2,
            title: 'Maslow hierarchy of...',
            starred: true,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        },
        {
            id: 3,
            title: 'Behaviorism...',
            starred: true,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        },
        {
            id: 4,
            title: 'Documents, Presentation...',
            starred: false,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        },
        {
            id: 5,
            title: 'Classical conditioning and...',
            starred: false,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        },
        {
            id: 6,
            title: 'Personality assignment...',
            starred: false,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        },
        {
            id: 7,
            title: "Hammad's report of...",
            starred: false,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        },
        {
            id: 8,
            title: "Jenny's report of ICH...",
            starred: false,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        },
        {
            id: 9,
            title: 'NeroICH.AI Training...',
            starred: false,
            messages: [
                {
                    msg_id: 1,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 2,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 3,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                },
                {
                    msg_id: 4,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: true,
                    disliked: false
                },
                {
                    msg_id: 5,
                    message: 'Vaping-induced lung injury is a syndrome of lung disease associated with vaping or e-cigarette products[1]. The mechanisms by which lung injury occurs remain to be fully understood, but it is hypothesized that vaping damages lung defenses, allowing bacterial or viral organisms to infect the lungs and further exacerbate lung function[2]. Furthermore, chemicals found in e-cigarettes alter lung structures, leading to an exaggerated response to an infectious insult[3]. A combination of these two mechanisms may lead to acute respiratory failure. There is also evidence that e-cigarette use alters innate immunity and airway cytokines while increasing the virulence of colonizing bacteria. E-cigarette use has been associated with cough, bronchitis symptoms, and respiratory failure by pneumonitis epidemic that has led several dozen people to death.',
                    liked: false,
                    disliked: true
                }
            ]
        }
    ]

    function checkStarred(chat) {
        return chat?.starred === true
    }

    function checkUnStarred(chat) {
        return chat?.starred === false
    }

    return (
        <Layout>
            <div className="h-10 pl-10">
                {agreed ? (
                    <div className="flex flex-row justify-between items-center h-full pl-96 pr-10">
                        {selectedChat ? (
                            <div className="flex flex-row items-center justify-between w-80">
                                <div className="flex flex-row items-center gap-5">
                                    {selectedChat?.starred ? (
                                        <img alt="starred" src="/src/assets/icons/star-fill.png" style={{height: '20px'}} />
                                    ) : (
                                        <img alt="unstarred" src="/src/assets/icons/star.png" style={{height: '20px'}} />
                                    )}
                                    <div>{selectedChat?.title}</div>
                                </div>
                                <img alt="edit" src="/src/assets/icons/edit-black.png" className="px-3" style={{height: '20px'}} />
                            </div>
                        ) : (
                            <div className="flex flex-row items-center justify-between w-80">
                                <div className="flex flex-row items-center gap-5">
                                    <img alt="unstarred" src="/src/assets/icons/star.png" style={{height: '20px'}} />
                                    <input type="text" placeholder="Write title..." style={{outline: 'none', width: '150px', background: 'transparent'}} />
                                </div>
                                <img alt="edit" src="/src/assets/icons/edit-black.png" className="px-3" style={{height: '20px'}} />
                            </div>
                        )}
                        <div className="flex flex-row items-center gap-5 h-full">
                            <div className="rounded-lg bg-bgblue text-white py-1 px-3">EN</div>
                            <div className="rounded-full h-7 w-7 flex items-center justify-center border-2 border-black font-semibold">i</div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row items-center gap-5 h-full">
                        <div className="rounded-lg bg-bgblue text-white py-1 px-3">EN</div>
                        <div className="rounded-full h-7 w-7 flex items-center justify-center border-2 border-black font-semibold">i</div>
                    </div>
                )}
            </div>
            <div className="bg-gray-100 mt-5" style={{height: '1px', width: '100%'}} />
            <div className="h-full flex flex-row">
                <div className="w-96 flex flex-col gap-10 p-5">
                    <div className="w-full h-12 px-5 flex flex-row gap-5 items-center rounded-full border border-gray-300">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                        <input type="text" placeholder="Find previous chats." style={{outline: 'none', width: '100%'}} />
                    </div>
                    {agreed ? (
                        <div className="flex flex-col h-[70vh] justify-between">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row items-center gap-5">
                                    {showStarredChats ? (
                                        <button onClick={() => {setShowStarredChats(false)}}>
                                            <ChevronUpIcon className="h-6 w-6 text-black" />
                                        </button>
                                    ) : (
                                        <button onClick={() => {setShowStarredChats(true)}}>
                                            <ChevronDownIcon className="h-6 w-6 text-black" />
                                        </button>
                                    )}
                                    <div className="text-lg font-semibold">Starred Chats</div>
                                </div>
                                {showStarredChats && (
                                    <div className="flex flex-col gap-3 h-24 overflow-y-auto">
                                        {chats?.filter(checkStarred)?.map((chat, key) => {
                                            return (
                                                <div className="flex flex-row items-center justify-between" key={key}>
                                                    <div className="flex flex-row items-center gap-5">
                                                        <img alt="starred" src="/src/assets/icons/star-fill.png" style={{height: '20px'}} />
                                                        <button onClick={() => {setSelectedChat(chat)}}>{chat?.title}</button>
                                                    </div>
                                                    <div className="flex flex-row items-center">
                                                        <img alt="edit" src="/src/assets/icons/edit.png" className="px-3" style={{height: '20px'}} />
                                                        <img alt="delete" src="/src/assets/icons/delete.png" className="px-3" style={{height: '20px'}} />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                                <div className="flex flex-row items-center gap-5">
                                    {showAllChats ? (
                                        <button onClick={() => {setShowAllChats(false)}}>
                                            <ChevronUpIcon className="h-6 w-6 text-black" />
                                        </button>
                                    ) : (
                                        <button onClick={() => {setShowAllChats(true)}}>
                                            <ChevronDownIcon className="h-6 w-6 text-black" />
                                        </button>
                                    )}
                                    <div className="text-lg font-semibold">All Chats</div>
                                </div>
                                {showAllChats && (
                                    <div className="flex flex-col gap-3 h-44 overflow-y-auto">
                                        {chats?.filter(checkUnStarred)?.map((chat, key) => {
                                            return (
                                                <div className="flex flex-row items-center justify-between" key={key}>
                                                    <div className="flex flex-row items-center gap-5">
                                                        <img alt="unstarred" src="/src/assets/icons/star.png" style={{height: '20px'}} />
                                                        <button onClick={() => {setSelectedChat(chat)}}>{chat?.title}</button>
                                                    </div>
                                                    <div className="flex flex-row items-center">
                                                        <img alt="edit" src="/src/assets/icons/edit.png" className="px-3" style={{height: '20px'}} />
                                                        <img alt="delete" src="/src/assets/icons/delete.png" className="px-3" style={{height: '20px'}} />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                            <button className="rounded-full bg-bgblue text-white text-xl font-semibold py-2 w-full flex flex-row gap-3 justify-center items-center">
                                <PlusIcon className="h-8 w-8 text-white" />
                                <div>New Chat</div>
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-5">
                            <div className="text-lg font-semibold">Top Use cases for SynaptiQuery</div>
                            <div className="rounded-3xl text-gray-500 text-sm bg-bgblue bg-opacity-5 px-5 w-full flex flex-col gap-5 py-10">
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Stay updated with the latest research from Pubmed</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Access references to reliable sources.</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1">Ask follow-up questions based on your research</div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <div className="bg-bgblue h-2 w-2 rounded-full mt-2" />
                                    <div className="flex-1 flex flex-col">
                                        <div>Translate research to multiple languages:</div>
                                        <div className="font-semibold">Urdu, Spanish, and Arabic</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="bg-gray-100" style={{height: '100%', width: '1px'}} />
                <div className="h-[80vh] pt-10 px-10 flex-1">
                    {agreed ? (
                        <div className="flex flex-col h-full">
                            <div className="flex flex-row gap-8 justify-end items-center">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="font-semibold">Haris Shaikh</div>
                                    <div className="text-xs text-gray-500">3:00PM</div>
                                </div>
                                <img alt="profile-picture" src="/src/assets/images/profile_picture.jpg" className="rounded-full" style={{height: '50px', width: '50px'}} />
                            </div>
                            <div className="flex-1"></div>
                            <div className="rounded-full h-20 border"></div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col justify-between">
                            <div className="flex flex-col gap-10">
                                <div className="text-2xl font-semibold">About SynaptiQuery</div>
                                <div className="text-lg text-gray-500">SynaptiQuery is an interactive chat-based interface for querying neuroscientific literature from PubMed. Users can query using keywords, phrases or questions in natural language. SynaptiQuery provides relevant article abstracts and other information. It simplifies and expedites the literature search process, allowing researchers to focus on their work.</div>
                            </div>
                            <div className="flex justify-end w-full">
                                <button onClick={() => {setAgreed(true)}} className="bg-bgblue text-white font-semibold px-36 py-3 rounded-2xl">I Understand</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default SynaptiQuery