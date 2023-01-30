import React from 'react';

// import React, {useContext, useEffect, useRef} from 'react';
// import {Context} from '..';

// const Row = () => {
// 	const data = useContext(Context);
// 	const customElement = useRef(null);

// 	useEffect(() => {
// 		console.log(customElement.current);
// 	}, []);
// 	return <div ref={customElement}>{data}</div>;
// };

// const Home = () => {
// 	// const [num, setNum] = useState(0);
// 	// useEffect(() => {
// 	// 	console.log('showEffect');
// 	// });

// 	return (
// 		<div>
// 			<Row />
// 			{/* <button onClick={() => setNum(num + 1)}>Add</button>
// 			{num}
// 			<button onClick={() => setNum(num - 1)}>Subtract</button> */}
// 		</div>
// 	);
// };

// export default Home;

function Practice() {
	return <div>Practice</div>;
}
//Jsx format//
// function MyComponent(props) {
// 	return <div>{props.name}</div>;
// }
// function App() {
// 	return (
// 		<div>
// 			Hello
// 			<MyComponent name={'pooja'} />
// 		</div>
// 	);
// }

//destructring

// function MyComponent({name, nameForClass, income = 10}) {
// 	return (
// 		<>
// 			<div className="nameForClass">
// 				{name}:${income}
// 			</div>
// 			<hr />
// 		</>
// 	);
// }

// function App() {
// 	return (
// 		<div>
// 			Hello
// 			<MyComponent nameForClass="div1" name={'Ram'} income={2000} />
// 			<MyComponent nameForClass="div2" name={'sita'} income={2000} />
// 			<MyComponent nameForClass="div3" name={'Saburi'} />
// 		</div>
// 	);
// }

// export const Home = () => {
// 	let inputvalue;
// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				style={{padding: '20,border:1px solid green'}}
// 				placeholder="Enter Something"
// 				onChange={(e) => {
// 					inputvalue = e.target.value;
// 					console.log(inputvalue);
// 				}}
// 			/>
// 		</div>
// 	);
// };

// import React, {useState} from 'react';

// export const Home = () => {
// 	const [inputvalue, setInputValue] = useState(0);

// 	const decrement = () => {
// 		setInputValue(inputvalue - 1);
// 	};
// 	const increment = () => {
// 		setInputValue(inputvalue + 1);
// 	};

// 	const btnStyle = {
// 		padding: 10,
// 		border: 'none',
// 		backgroundColor: '#f1f1f1',
// 		margin: 10,
// 	};
// 	return (
// 		<div>
// 			<input
// 				type="number"
// 				placeholder="Enter something"
// 				style={{padding: 10, border: '1px solid rgba(0,0,0,0.4)'}}
// 				value={inputvalue}
// 				readOnly
// 			/>
// 			<button style={btnStyle} onClick={decrement}>
// 				-
// 			</button>
// 			<button style={btnStyle} onClick={increment}>
// 				+
// 			</button>
// 		</div>
// 	);
// };

//react class component
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0,
// 		};
// 		this.increment = this.increment.bind(this);
// 	}
// 	increment() {
// 		this.setState((prev) => ({
// 			count: prev.count + 1,
// 		}));
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{this.state.count}
// 				<button onClick={this.increment}>increment</button>
// 			</div>
// 		);
// 	}

// React lifecyclemethods
// 1.componentDidMount2.componentWillUnMount

// const Contact = () => {
// 	const mouseOverFunc = (e) => {
// 		console.log(e.clientX);
// 		console.log(e.clientY);
// 	};

// 	useEffect(() => {
// 		document.addEventListener('mousemove', mouseOverFunc);
// 		return () => {
// 			document.removeEventListener('mousemove', mouseOverFunc);
// 		};
// 	}, []);

// 	return <div>Contact</div>;
// };

// const mouseOverFunc = (e) => {
// 	console.log(e.clientX);
// 	console.log(e.clientY);
// };
// class Contact extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	componentDidMount() {
// 		document.addEventListener('mousemove', mouseOverFunc);
// 	}
// 	componentWillUnMount() {
// 		document.removeEventListener('mousemove', mouseOverFunc);
// 	}
// 	render() {
// 		return <div>Contact</div>;
// 	}
// }

// class MyComponent extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	}
// 	render() {
// 	  return (
// 		<div>
// 		  <NewComponent/>
// 		</div>
// 	  );
// 	}
//   };

//   function NewComponent (props){
// 	return (
// 	  <p>{props.name}</p>
// 	)
//   }
//   NewComponent.defaultProps={
// 	name:"Honey"
//   }
//   NewComponent.propTypes={
// 	name:PropTypes.string.isRequired
//   }
export default Practice;
