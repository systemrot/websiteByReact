import React, {useState, useContext, useEffect} from 'react';
import './Form.css';
import {ChatBotContext} from '../../context/chatBotContext';


const Form = () => {
	const [messages, setMessages] = useContext(ChatBotContext);
	const [question, setQuestion] = useState("");

	let dataBase = new Map();
	const myAge = new Date();
	const negativeAnswer =
		[
		 	"Я не понимаю вопроса!",
		 	"Опаньки...что-то пошло не так :(",
		 	"Попробуйте еще раз...",
		 	"Это точно русский язык...",
		 	"Прости, но я не понимаю!",
		 	"Прошу прощения, но я еще глуп, и плохо понимаю человека!"
		]
	dataBase.set("привет", "Привет!")
			.set("пока", "Пока!")
			.set("кто ты", "Я - секретная разработка отдела по спасению заблудших душ под руководством Федяева Ю.С.")
			.set("как тебя зовут", "Меня зовут - Donald Go")
			.set("помоги", "Уточни, в чем тебе нужна помощь?")
			.set("чем занимаешься", "Помогаю людям, ничего не делая!")
			.set("чем занимаетесь", "Ничем, просто отдыхаем!")
			.set("твоя фишка", "У меня нет фишек...")
			.set("найди", "Ищу, ищу...Но что-то никак не выходит!")
			.set("вечер", "Вечер добрый.")
			.set("утро", "Утро доброе.")
			.set("день", "День добрый!")
			.set("язык", "Я знаю только русский язык")
			.set("гугл", "Добавьте слово 'google' или 'загугли' куда угодно в вопросе, чтобы я осуществил поиск.")
			.set("гуглани", "Добавьте слово 'google' или 'загугли' куда угодно в вопросе, чтобы я осуществил поиск.")
			.set("нагугли", "Добавьте слово 'google' или 'загугли' куда угодно в вопросе, чтобы я осуществил поиск.")
			.set("gogle", "Добавьте слово 'google' или 'загугли' куда угодно в вопросе, чтобы я осуществил поиск.")
			.set("гуглить", "Добавьте слово 'google' или 'загугли' куда угодно в вопросе, чтобы я осуществил поиск.")
			.set("фишка", "В чем фишка?")
			.set("имя", "Моё имя - Donald Go")
			.set("анимац", "https://systemrot.github.io/#/animation1,https://systemrot.github.io/#/animation2")
			.set("сколько тебе лет", myAge);

	useEffect(() => {
		const lastMessage = document.getElementsByClassName("question-answer")[document.getElementsByClassName("question-answer").length-1];
		lastMessage.scrollIntoView(true);
		// console.log(lastMessage);
	});
	
	const getAnswer = (query) => {
		if(query.toLowerCase().includes("google")){
			const googleQuery = query.replace("google", "");
			window.open('http://google.com/search?q='+googleQuery);
			return "Открываю новое окно...";
		}
		if(query.toLowerCase().includes("загугли")){
			const googleQuery = query.replace("загугли", "");
			window.open('http://google.com/search?q='+googleQuery);
			return "Открываю новое окно...";
		}
		// TODO: Log the question in a dataBase
		const answer = dataBase.get(question.toLowerCase());
		let tryToAnswer;
		if(!answer){
			try{
				dataBase.forEach((elem, index) => {
					if(query.toLowerCase().includes(index)){
						tryToAnswer = dataBase.get(index)
						throw "get it";
					}else{
						tryToAnswer = negativeAnswer[Math.floor(Math.random() * negativeAnswer.length)];
					}
				});
			}catch(e){
				if (e !== "get it") throw e;
			}

		}
		// let tryToAnswer = query.toLowerCase().includes("привет") ? dataBase.get("привет") : "Я не понимаю вопроса!";
		// console.log(query.toLowerCase().includes("привет"));
		// console.log(typeof dataBase);
		// console.log(`answer: ${answer ? answer : tryToAnswer}`);
		return `${answer ? answer : tryToAnswer}`;
	};

	const sendMessage = () => {
		setMessages(prevMessages => [...prevMessages, {
			question: question,
			answer: getAnswer(question),
			id: prevMessages.length + 1
		}]);
		setQuestion("");
	};

	const shouldMessageSend = (e) => {
		if (e.key === "Enter")sendMessage();
	};

	const updateQuestion = (e) => {
		setQuestion(e.target.value);
	} 
	return (
	    <div>
	    	<div className="chat_window">

	    		<div className="top_menu">
	    			<div className="buttons">
	    				<div className="button close">
	    				</div>
	    				<div className="button minimize">
	    				</div>
	    				<div className="button maximize">
	    				</div>
	    			</div>
	    			<div className="title">Chat-Bot</div>
	    		</div>


	    		<ul className="messages">
	    			{messages.map(elem => {
	    				return (
							<div key={elem.id} className="question-answer">
								<li className="messages-question">{elem.question}</li>
								<li className="messages-answer">
									{
										elem.answer && elem.answer.includes("http") && 
											<div>
												<a href={elem.answer.split(",")[0]}>Летащие кубики</a><br/>
												<a href={elem.answer.split(",")[1]}>Текст из частиц</a><br/>
												<a href="#">Контуры лица на Pixi.JS</a><br/>
												<a href="#">Игра Three.js</a>
											</div>
											|| elem.answer
									}
								</li>
							</div>)}
	    				)
	    			}


	    		</ul>

	    		<div className="bottom_wrapper clearfix"
		    		><div className="message_input_wrapper">
		    			<input className="message_input" placeholder="Type your message here..." type="text" value={question} onKeyDown={shouldMessageSend} onChange={updateQuestion} />
		    		</div>
		    		<div className="send_message" onClick={sendMessage}>
		    			<div className="icon"></div>
		    			<div className="text">Ask</div>
		    		</div>
	    		</div>

		    	<div className="message_template">
		    		<li className="message">
		    			<div className="avatar"></div>question
		    			<div className="text_wrapper">
		    					<div className="text"></div
		    			></div>
		    		</li>
		    	</div>
	    	</div>
	    </div>
	);

}

export default Form;


		// <form>
		//   <div className="row" id="row-inputs">
		// 	    <div className="col">
		// 	      	<input type="text" className="form-control" placeholder="Answer..."></input>
		// 	    </div>
		// 	    <div className="col">
		// 	      	<input type="text" className="form-control" placeholder="Question..."></input>
		// 	    </div>
		// 	    <div> className='</div>

		// 	    <button type="submit" className="btn btn-dark">Confirm identity</button>
		//   </div>
		// </form>