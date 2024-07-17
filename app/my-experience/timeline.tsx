"use client";
import React, { useRef, useEffect, useState } from "react";
import Modal from "react-modal";
import timelineData from "@/constants";
import { useIsVisible } from "./transition";
import Image from "next/image";

interface TimelineElement {
    id: string;
    color: number;
    date: string;
    icon: string;
    title: string;
    location: string;
    description: string;
    keyResponsibilities: string[];
    buttonText: string;
}

interface TimelineItemProps {
    element: TimelineElement;
    itemRef: React.RefObject<HTMLDivElement>;
    onButtonClick: (responsibilities: string[] | undefined) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ element, itemRef, onButtonClick }) => {
    const isVisible = useIsVisible(itemRef);
    const defaultColor = "bg-cyan-500";
    const colors = [
        "bg-cyan-500",
        "bg-yellow-500",
    ]

    return (
        <div ref={itemRef} className={`transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="flex m-4 relative">
                {/* <div className={`${defaultColor} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}></div>
                <div className={`${defaultColor} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}></div> */}
                <div className="hidden items-start w-60 pt-0.5 relative sm:flex">
                    <div className="w-4/5 text-gray-500">{element.date}</div>
                    <div className={`${defaultColor} w-px h-full translate-x-5 translate-y-10 opacity-30`}></div>
                    <Image src={element.icon} alt="icon" className={`${colors[element.color]} p-1 rounded-lg z-10`} width={40} height={40} />
                    <div className={`${defaultColor} h-px w-8 translate-y-5 opacity-30`}></div>
                </div>
                <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
                    <div className="text-xl font-medium">{element.title}</div>
                    <div className="text-gray-300 mb-6 sm:mb-4 sm:text-base">
                        {element.location} 
                        <span className="sm:hidden"> {element.date} </span>
                    </div>
                    <div className="mb-4 text-center">{element.description}</div>
                    {element.buttonText && 
                    <button className={`${colors[element.color]} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`} onClick={() => onButtonClick(element.keyResponsibilities)}>{element.buttonText}</button>
                    }
                </div>
            </div>
        </div>
    );
};

const Timeline = () => {
    const refs = useRef([]);
    refs.current = timelineData.map((_: unknown, i: number) => refs.current[i] ?? React.createRef());

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentElement, setCurrentElement] = useState<any[]>([]);

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const openModal = (element: any) => {
        setCurrentElement(element);
        setModalIsOpen(true);
    }

    return (
    <div className={`overflow-y-scroll ${modalIsOpen ? 'blur-md' : ''}`}>
      {timelineData.map((element, index) => (
            <TimelineItem
                key={index}
                element={element}
                itemRef={refs.current[index]}
                onButtonClick={openModal}
            />
        ))}

        {/* Modal */}
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Element Details"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            overlayClassName="fixed inset-0 bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm"
        >
            {currentElement && (
                <div className="w-4/5 md:w-2/5 bg-white p-6 rounded-lg shadow-xl justify-center items-center h-3/5 md:h-auto overflow-y-scroll">
                    <h1 className="font-semibold font-[20px]">Key Responsibilities</h1>
                    <ul className="list-disc">
                        {currentElement.map((item, index) => (
                            <li key={index} className="ml-4">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button className={`flex bg-cyan-400 text-gray-950 font-medium px-4 py-2 rounded-md mx-auto mt-2 cursor-pointer hover:text-white z-100`} onClick={closeModal}>Close</button>
                </div>
            )}
        </Modal>
    </div>
  )
};

export default Timeline;