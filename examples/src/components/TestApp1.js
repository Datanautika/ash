import ash from 'ash';


export default class TestApp1 extends ash.Component {
	state = {
		count: 0
	};

	static doneStream = new ash.Stream();

	render() {
		return <main>{`render ${this.state.count}`}</main>;
	}

	onMount() {
		if (this.props && this.props.updateStream) {
			this.props.updateStream.on(this.update);
		}
	}

	onRender() {
		this.state.count++;

		this.doneStream.push(this.state.count);
	}
}
