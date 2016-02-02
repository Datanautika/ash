import ash from 'ash';
import Router from 'ash/Router';

import styles from './App.css';
import pageStream from '../streams/pageStream';
import storyStream from '../streams/storyStream';
import languageStream from '../streams/languageStream';
import constants from '../internals/constants';


const EN = constants.EN;
const CZ = constants.CZ;

let router = new Router();

export default class App extends ash.Component {
	state = {
		items: [],
		isColored: false
	};

	render() {
		let {current: page} = pageStream.get();
		let {current: language} = languageStream.get();
		let {current: story} = storyStream.get();

		let items = null;

		if (this.state.items.length) {
			items = <div class={styles.items} style={{outline: this.state.isColored ? '1px solid red' : '1px solid blue'}}>
				{this.state.items.map((value, index) => <div >{`${index}: ${value}`}</div>)}
			</div>;
		}

		return <div class={styles.root}>
			<p>{`Language: ${language}`}</p>
			<p>{`Page: ${page}`}</p>
			<p>{`Story: ${story}`}</p>
			<p events={{click: this.handleClick}}>
				<a href={`/${CZ}/foo/bar`}>CZ foo/bar</a>
				<a href={`/${EN}/foo/bar`}>EN foo/bar</a>
			</p>
			<p>
				<a href="#" events={{click: this.handleToggleGrid}}>Toggle grid</a>
				<a href="#" events={{click: this.handleAddEvent}}>Add items</a>
				<a href="#" events={{click: this.handleChangeColor}}>Change color</a>
			</p>
			{items}
		</div>;
	}

	onMount() {
		pageStream.on(this.update);
		storyStream.on(this.update);
		languageStream.on(this.update);
	}

	handleClick(event) {
		event.preventDefault();

		router.navigate(event.target.getAttribute('href'));
	}

	handleAddEvent(event) {
		event.preventDefault();

		for (let i = 0; i < 500; i++) {
			this.state.items.push([Math.random() * 1000 >> 0]);
		}

		this.update();
	}

	handleChangeColor(event) {
		event.preventDefault();

		this.state.isColored = !this.state.isColored;

		this.update();
	}

	handleToggleGrid(event) {
		event.preventDefault();

		if (document.querySelector('body').className) {
			document.querySelector('body').className = '';
		} else {
			document.querySelector('body').className = 'hasGrid';
		}

		this.update();
	}
}
