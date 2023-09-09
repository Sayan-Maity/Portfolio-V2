import { useEffect, useState } from 'react'
import { PiBellSimpleRingingFill } from 'react-icons/pi';
import { LiaTimesSolid } from 'react-icons/lia';
import { RiSendPlaneFill } from 'react-icons/ri';
import { MdDoneAll } from 'react-icons/md';
import { PiDotsNine } from 'react-icons/pi';

import '../styles/ChatBot.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { IGPTResponse } from '../types/FileTypes';

const ChatBot = () => {
    const [openChatBot, setOpenChatBot] = useState<boolean>(false);
    const [closeBoxDesc, setCloseBoxDesc] = useState<boolean>(false);
    const [userInput, setUserInput] = useState("");
    const [gptResponse, setGptResponse] = useState<IGPTResponse[]>([]);
    const [loading, setLoading] = useState(false);
    const [showBotFirstMessage, setShowBotFirstMessage] = useState<boolean>(false);
    const [userSendTime, setUserSendTime] = useState('');
    const [botResponseTime, setbotResponseTime] = useState('');
    const [openMoreUserMessages, setOpenMoreUserMessages] = useState<boolean>(false);

    const getUserSendTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const timeString = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
        setUserSendTime(timeString);
    };

    useEffect(() => {
        if (openChatBot === true) {

            const timer = setTimeout(() => {
                setShowBotFirstMessage(true);
            }, 500);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [openChatBot])

    useEffect(() => {
        const timer = setTimeout(() => {
            setCloseBoxDesc(true);
        }, 800);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const askGPT = (e: React.FormEvent) => {
        e.preventDefault();
        if (userInput.trim() === "") {
            toast.error("Hey, please write something !", {
                icon: "👽",
            });
            return;
        }
        setGptResponse((prev) => [...prev, { isUser: true, text: userInput }]);

        sendMessage(userInput);
        setUserInput("");
    };
    const sendMessage = async (message: string) => {
        try {
            setLoading(true);
            const response = await axios.post(
                // `${import.meta.env.VITE_SERVER_URL}/openAi/chatCompletion`,
                `http://localhost:3002/api/chatCompletion`,
                {
                    userPrompt: message,
                }
            );

            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const amOrPm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const gptResponseTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
            setbotResponseTime(gptResponseTime);

            toast.success("Sayan send you a message !", {
                icon: "👽",
            });
            setGptResponse((prev) => [
                ...prev,
                { isUser: false, text: response.data.gptPrompt.content },
            ]);
            setLoading(false);
            console.log(gptResponse);
        } catch (error: any) {
            toast.error(error.message);
            setLoading(false);
            console.log(error);
        }
    };

    const customUserMessages = [
        { id: 1, message: "Tell your hobbies" },
        { id: 2, message: "Do you go Gym?" },
        { id: 3, message: "Wanna go on a coffee date with me?" },
        { id: 4, message: "Can I be your friend?" },
        { id: 5, message: "I love you" },
        { id: 6, message: "Which food you enjoy the most?" },
        { id: 7, message: "Do you believe in paranormal acitvities?" },
        { id: 8, message: "Ever thought of space exploration?" },
        { id: 9, message: "WFH or remote?" },
    ]

    return (
        <section className="chatBot-outerDiv" >
            <div className="chatBot-innerDiv" >
                {openChatBot && (
                    <div className="chat-body">
                        <div className="banner-chat-body">
                            <div className='left'>
                                <img src="https://ik.imagekit.io/sayancr777/tr:w-400/Portfolio/sayan.jpg?updatedAt=1691154907703" alt="" />
                                <div>
                                    <p>Sayan 😃</p>
                                    <p>{loading ? "typing ..." : "online"}</p>
                                </div>
                            </div>
                            <div className='close-chatBody' onClick={() => setOpenChatBot(false)}><LiaTimesSolid /></div>
                        </div>
                        <div className='chatLog'>
                            <p className="bot-first-message">
                                {showBotFirstMessage && (<span> hello 👋, I am Sayan and today I am here to assist you <p></p></span>)}

                            </p>
                            {gptResponse.map((item, index) => (
                                <div className="chatBot-mainDiv">
                                    {item?.isUser === true ? (
                                        <p className="user" key={index}>
                                            <span> {item.text} <p><MdDoneAll size={15} /> {userSendTime}</p></span>
                                        </p>
                                    ) : (
                                        <p className="bot" key={index}>
                                            <span> {item.text} <p>{botResponseTime}</p></span>
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                        <form onSubmit={askGPT} style={{ position: "relative" }}>
                            {/* <div className={openMoreUserMessages === false ? "form-customUser-messages-before" : "form-customUser-messages-after"} >
                                <p style={{fontSize: "0.9rem", marginBottom: "0.5rem"}}>Don't know what to ask?</p>
                                {customUserMessages.map((item) => (
                                    <button type='submit' key={item.id} onClick={() => { setUserInput(item.message); setOpenMoreUserMessages(true); getUserSendTime(); }}>
                                        <p >{item.message}</p>
                                    </button>
                                ))}
                            </div> */}

                            <div style={{ display: "flex", alignItems: "center", width: "100%", zIndex: "2", backgroundColor: "#fff" }}>
                                <p style={{ cursor: "pointer", padding: "0 0.5rem" }} onClick={() => setOpenMoreUserMessages(!openMoreUserMessages)} title='more choices'><PiDotsNine /></p>
                                <input
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder={loading ? "Sayan is typing ..." : "Ask whatever you want "}
                                    onKeyUp={getUserSendTime}
                                />
                                <button type="submit" style={{ outline: "none", border: "none", backgroundColor: "#fff", padding: "0 0.5rem", cursor: "pointer" }} title='send'><RiSendPlaneFill size={16}/></button>
                            </div>
                        </form>
                    </div>
                )}
                <div className='box-outerDiv'>
                    <div className='box-description'>

                        {closeBoxDesc && (<div className='box-description-modal'>
                            <div style={{ fontSize: "1.4rem" }}><PiBellSimpleRingingFill /></div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <p>Hi, how are you doing today?</p>
                                <p onClick={() => setCloseBoxDesc(false)}><LiaTimesSolid /></p>
                            </div>
                        </div>)}
                    </div>
                    {openChatBot === false && (<div className="box" onClick={() => setOpenChatBot(!openChatBot)}></div>)}
                </div>
            </div>
        </section>
    )
}

export default ChatBot
