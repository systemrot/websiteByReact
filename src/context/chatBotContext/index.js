import React, {useState, createContext} from "react";

export const ChatBotContext = createContext();

export const ChatBotProvider = (props) => {
	const [messages, setMessages] = useState([
		{

		}
		]);

	return(
		<ChatBotContext.Provider value={[messages, setMessages]}>
			{props.children}
		</ChatBotContext.Provider>
	);
}