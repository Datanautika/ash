import Component from '../../core/view/Component';
import styles from './Input.css';


const ENTER_KEY_CODE = 13;

export default class Input extends Component {
	props: {
		id: string,
		name: string,
		isValid: boolean,
		isDisabled: boolean,
		handleChange: () => void,
		handleSave: () => void,
		validator: () => void
	};

	shouldUpdate(newProps) {
		return newProps.id !== this.props.id ||
			newProps.name !== this.props.name ||
			newProps.type !== this.props.type ||
			newProps.autocomplete !== this.props.autocomplete ||
			newProps.isValid !== this.props.isValid ||
			newProps.isDisabled !== this.props.isDisabled ||
			newProps.handleChange !== this.props.handleChange ||
			newProps.handleSave !== this.props.handleSave ||
			newProps.validator !== this.props.validator;
	}

	render() {
		let inputProps = {
			key: this.props.id || this.props.name || '',
			class: styles.default + (this.props.isValid ? ' isValid' : ' isInvalid') + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
			type: 'text',
			name: this.props.name || this.props.id || '',
			id: this.props.id || this.props.name || '',
			events: {
				blur: this.handleFocusOut,
				input: this.handleInput,
				keydown: this.handleKeyDown
			}
		};

		if (this.props.type === 'email') {
			inputProps.type = this.props.type;
		}

		if (this.props.isDisabled) {
			inputProps.disabled = 'disabled';
		}

		if (this.props.autocomplete === false) {
			inputProps.autocomplete = 'off';
		}

		return <input {...inputProps} />;
	}

	handleInput(event) {
		if (this.props.handleChange) {
			this.props.handleChange(this.validate(event.target.value));
		}
	}

	handleFocusOut(event) {
		if (this.props.handleSave) {
			this.props.handleSave(this.validate(event.target.value));
		}
	}

	handleKeyDown(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			if (this.props.handleSave) {
				this.props.handleSave(this.validate(event.target.value));
			}
		}
	}

	validate(value) {
		return this.props.validator ? this.props.validator(value) : value;
	}
}
