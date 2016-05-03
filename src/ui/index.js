import styles from './components/shared.css';
import {setConfig, getConfig} from './config';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Input from './components/Input';
import Textarea from './components/Textarea';
import Form from './components/Form';
import FormRow from './components/FormRow';


let ui = {
	/**
	 * Class names for internal CSS.
	 *
	 * @type {object}
	 */
	styles,

	get config() {
		return getConfig();
	},

	set config(configObject) {
		setConfig(configObject);
	},

	Button,
	ButtonGroup,
	Form,
	FormRow,
	Input,
	Textarea,
};

export default ui;
