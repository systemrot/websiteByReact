import React from 'react';


export default class Cards extends React.Component {

	componentDidMount(){
		
	}

	render(){
		return (
				<div className="content-wrapper">
					<div className="card">
					  <div className="headerDesc">header</div>
					  <img className="card-img-top" src="./img/animation1full.png" alt="Card cap"></img>
					  <div className="card-body">
					    <h5 className="card-title">500 000 кубиков</h5>
					    <p className="card-text">На чистом webgl создаем 500 000 кубиков, при этом fps будет стабильным и стремться к 60.</p>
					    <a href="/animation1" className="btn btn-dark">Демонстрация</a>
					  </div>
					</div>

					<div className="card">
					  <div className="headerDesc">header</div>
					  <img className="card-img-top" src="./img/animation2full.png" alt="Card cap"></img>
					  <div className="card-body">
					    <h5 className="card-title">Текст из частиц</h5>
					    <p className="card-text">Используя ресурсы PIXI, создаем текст из частиц, который разлетается при наведении мыши и потом собирается обратно</p>
					    <a href="/animation2" className="btn btn-dark">Демонстрация</a>
					  </div>
					</div>

					<div className="card">
					  <img className="card-img-top" src="../img/tmp.jpg" alt="Card cap"></img>
					  <div className="card-body">
					    <h5 className="card-title">В разработке...</h5>
					    <p className="card-text">Текущий пример пока находится в разработке и не доступен.</p>
					    <a href="/" className="btn btn-dark">Демонстрация</a>
					  </div>
					</div>

					<div className="card">
					  <img className="card-img-top" src="../img/tmp.jpg" alt="Card cap"></img>
					  <div className="card-body">
					    <h5 className="card-title">В разработке...</h5>
					    <p className="card-text">Текущий пример пока находится в разработке и не доступен.</p>
					    <a href="/" className="btn btn-dark">Демонстрация</a>
					  </div>
					</div>

					<div className="card">
					  <img className="card-img-top" src="../img/tmp.jpg" alt="Card cap"></img>
					  <div className="card-body">
					    <h5 className="card-title">В разработке...</h5>
					    <p className="card-text">Текущий пример пока находится в разработке и не доступен.</p>
					    <a href="/" className="btn btn-dark">Демонстрация</a>
					  </div>
					</div>

					<div className="card">
					  <img className="card-img-top" src="../img/tmp.jpg" alt="Card cap"></img>
					  <div className="card-body">
					    <h5 className="card-title">В разработке...</h5>
					    <p className="card-text">Текущий пример пока находится в разработке и не доступен.</p>
					    <a href="/" className="btn btn-dark">Демонстрация</a>
					  </div>
					</div>

				</div>
			)
	}
}