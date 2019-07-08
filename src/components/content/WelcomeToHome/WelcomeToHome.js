import React from 'react';
import './WelcomeToHome.css';
import Logo from './Logo.js';

const WelcomeToHome = () => {
	return(
			<div className="WelcomeToHome">
				<div className="prevDescription">
					<Logo></Logo>
					<p>The service's creating to improve knowledge.</p>
					<p>Common view's updating time to time</p>
					<div className="featuresList">
						<ul>
							<li>
								<p>There are some animations on WebGl. You can find it <a href="#">Here</a></p>
							</li>
							<li>
								<hr/>
								<p>For a chat bot i probably wll use one of those libraries :</p>
								<div className="listOfJsLibs">
									<ul>
										<li>
											<a href="#">Brain.js</a>
										</li>
										<li>
											<a href="#">Synaptic.js</a>
										</li>
										<li>
											<a href="#">ConvNetJS</a>
										</li>
										<li>
											<a href="#">Mind.js</a>
										</li>
										
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<a href="https://botui.org/"><div className="image"><span>What is that ?</span></div></a>
				<p>Chatbot nowadays plays a bigger role in our day to day living especially to those who were exposed on using internet, visiting web pages and browsing social media sites. Chatbot were mainly used for pre-defined customer support inquiries.</p>
				<p>As the first way, we can create a simple chatbot web application using HTML, CSS, Javascript, and RiveScript.js. Wait! What is <a href="https://github.com/aichaos/rivescript-js">RiveScript.js?</a> It is a <a href="https://www.rivescript.com/">RiveScript</a>  interpreter library for javascript. RiveScript is a scripting language for chatterbots, making it easy to write trigger/response pairs for building up a bot’s intelligence. You can read the complete documentation <a href="https://www.rivescript.com/docs/tutorial">here</a>.</p>
			</div>
		)
}

export default WelcomeToHome;