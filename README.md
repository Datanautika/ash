Ash
===

Javascript framework for building applications.


## Installation

Requires:
- [CSS modules](https://github.com/css-modules/css-modules) for processing css files
- Postcss plugins: postcss-css-variables, postcss-vertical-rhythm, postcss-nested, postcss-pxtorem, postcss-calc

```
npm install datanautika/ash --save
```


## Example

```js
import ash from 'ash';


let appStateStream = new ash.Stream({count: 0});

class App extends ash.Component {
	static addStream = new ash.Stream(0);
	static resetStream = new ash.Stream(false);

	render() {
		let {count} = appStateStream.get();

		return <div>
			<h1 class={ash.styles.sectionTitleHeading}>App</h1>
			<p>{`Count: ${count}`}</p>
			<p>
				<a href="#" events={{click: this.handleAdd}}>Add</a>
				<a href="#" events={{click: this.handleReset}}>Reset</a>
			</p>
		</div>;
	}

	onMount() {
		appStateStream.on(this.update);
	}

	handleAdd(event) {
		event.preventDefault();

		this.addStream.push(1);
	}

	handleReset(event) {
		event.preventDefault();

		this.resetStream.push(true);
	}
}

appStateStream.combine((dependencyAddStream, dependencyResetStream, stream, changedStreams) => {
	let count = dependencyAddStream.get();
	let appState = stream.get();
	let changed = false;

	if (changedStreams.indexOf(dependencyAddStream) >= 0 && dependencyAddStream.get()) {
		appState.count += count;
		changed = true;
	}

	if (changedStreams.indexOf(dependencyResetStream) >= 0 && dependencyResetStream.get()) {
		appState.count = 0;
		changed = true;
	}

	if (changed) {
		stream.push(appState);
	}
}, App.addStream, App.resetStream);

let viewStream = new ash.ViewStream(<App />);

ash.renderViewStream(viewStream, document.querySelector('.page'));
```


## License

Copyright 2016 Datanautika s.r.o.

Streams based on [Flyd](https://github.com/paldepind/flyd/) by Simon Friis Vindum

[The MIT License](https://github.com/datanautika/ash/blob/master/LICENSE)
