import Component from '../../core/view/Component';
import styles from './Textarea.css';


export default class Textarea extends Component {
	props: {
		id: string,
		name: string,
		rows: number,
		isValid: boolean,
		isDisabled: boolean,
		handleChange: () => void,
		handleSave: () => void,
		validator: () => void
	};

	shouldUpdate(newProps) {
		return newProps.id !== this.props.id ||
			newProps.name !== this.props.name ||
			newProps.rows !== this.props.rows ||
			newProps.isValid !== this.props.isValid ||
			newProps.isDisabled !== this.props.isDisabled ||
			newProps.handleChange !== this.props.handleChange ||
			newProps.handleSave !== this.props.handleSave ||
			newProps.validator !== this.props.validator;
	}

	render() {
		let textareaProps = {
			key: this.props.id || this.props.name || '',
			class: styles.default + (this.props.isValid ? ' isValid' : ' isInvalid') + (this.props.isDisabled ? ' isDisabled' : ' isEnabled'),
			name: this.props.name || this.props.id || '',
			id: this.props.id || this.props.name || '',
			rows: this.props.rows || 5,
			events: {
				blur: this.handleFocusOut,
				input: this.handleInput
			}
		};

		if (this.props.isDisabled) {
			textareaProps.disabled = 'disabled';
		}

		return <textarea {...textareaProps} />;
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

	validate(value) {
		return this.props.validator ? this.props.validator(value) : value;
	}
}
