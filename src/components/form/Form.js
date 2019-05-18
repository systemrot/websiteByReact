import React from 'react';
import './Form.css';


class Form extends React.Component {
  render(){
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
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>
	    			<li className='asdasdas'>sample message</li>

	    		</ul>

	    		<div className="bottom_wrapper clearfix"
		    		><div className="message_input_wrapper">
		    			<input className="message_input" placeholder="Type your message here..." />
		    		</div>
		    		<div className="send_message">
		    			<div className="icon"></div>
		    			<div className="text">Ask</div>
		    		</div>
	    		</div>

	    	<div className="message_template">
	    		<li className="message">
	    			<div className="avatar"></div>
	    			<div className="text_wrapper">
	    					<div className="text"></div
	    			></div>
	    		</li>
	    	</div>

	    	</div>
	    </div>
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
    );
  }
}

export default Form;
