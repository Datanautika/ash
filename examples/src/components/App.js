import ash from 'ash';

import styles from './App.css';
import pageStream from '../streams/pageStream';
import storyStream from '../streams/storyStream';
import languageStream from '../streams/languageStream';
import constants from '../internals/constants';


const EN = constants.EN;
const CZ = constants.CZ;
const EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let textInputValidator = (value) => (value === 'ash' ? value : false);
let emailValidator = (value) => {
	if (!value || typeof value !== 'string') {
		return false;
	}
	
	let email = value.trim();
	let result = EMAIL_REGEX.test(email);

	return result ? email : false;
};
let textareaValidator = (value) => (value.length >= 5 ? value : false);

export default class App extends ash.Component {
	state = {
		items: [],
		isColored: false,
		isTextInputValid: true,
		isEmailInputValid: true,
		isTextareaValid: true
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
			<section>
				<h1 class={ash.ui.styles.sectionLevel1Heading}>Form</h1>
				<ash.ui.Form class={styles.form}>
					<ash.ui.FormRow id="foo" label="Foo text input" hint="Type 'ash'" showError={!this.state.isTextInputValid} errorMessage={"You have to type 'ash'!"}>
						<ash.ui.Input id="foo" validator={textInputValidator} isValid={this.state.isTextInputValid} handleChange={this.handleTextInputChange}/>
					</ash.ui.FormRow>
					<ash.ui.FormRow id="foo" label="Foo email input" hint="Type any email" showError={!this.state.isEmailInputValid} errorMessage={"That's not a valid mail address!"}>
						<ash.ui.Input id="foo" type="email" validator={emailValidator} isValid={this.state.isEmailInputValid} handleChange={this.handleEmailInputChange}/>
					</ash.ui.FormRow>
					<ash.ui.FormRow id="foo" label="Textarea" hint="Write something longer than 4 characters" showError={!this.state.isTextareaValid} errorMessage={"Write something longer!"}>
						<ash.ui.Textarea id="foo" rows={3} validator={textareaValidator} isValid={this.state.isTextareaValid} handleChange={this.handleTextareaChange}/>
					</ash.ui.FormRow>
				</ash.ui.Form>
			</section>

			<section>
				<h1 class={ash.ui.styles.sectionLevel1Heading}>Buttons</h1>

				<h2 class={ash.ui.styles.sectionLevel2Heading}>Normal size</h2>
				<ash.ui.ButtonGroup>
					<ash.ui.Button label="Default button" />
					<ash.ui.Button label="Default button (disabled)" isDisabled={true} />
					<ash.ui.Button label="Default button" badge="Badge!" />
					<ash.ui.Button label="Default button (disabled)" badge="Badge!" isDisabled={true} />
					<ash.ui.Button type="flat" label="Flat button" />
					<ash.ui.Button type="flat" label="Flat button (disabled)" isDisabled={true} />
					<ash.ui.Button type="flat" label="Flat button" badge="Badge!" />
					<ash.ui.Button type="flat" label="Flat button (disabled)" badge="Badge!" isDisabled={true} />
					<ash.ui.Button type="invisible" label="Invisible button" />
					<ash.ui.Button type="invisible" label="Invisible button (disabled)" isDisabled={true} />
					<ash.ui.Button type="invisible" label="Invisible button" badge="Badge!" />
					<ash.ui.Button type="invisible" label="Invisible button (disabled)" badge="Badge!" isDisabled={true} />
					<ash.ui.Button label="Default submit button" isSubmit={true} />
				</ash.ui.ButtonGroup>
				<ash.ui.ButtonGroup>
					
				</ash.ui.ButtonGroup>

				<h2 class={ash.ui.styles.sectionLevel2Heading}>Large size</h2>
				<ash.ui.ButtonGroup>
					<ash.ui.Button label="Default button" isLarge={true} />
					<ash.ui.Button label="Default button (disabled)" isDisabled={true} isLarge={true} />
					<ash.ui.Button label="Default button" badge="Badge!" isLarge={true} />
					<ash.ui.Button label="Default button (disabled)" badge="Badge!" isDisabled={true} isLarge={true} />
					<ash.ui.Button type="flat" label="Flat button" isLarge={true} />
					<ash.ui.Button type="flat" label="Flat button (disabled)" isDisabled={true} isLarge={true} />
					<ash.ui.Button type="invisible" label="Invisible button" isLarge={true} />
					<ash.ui.Button type="invisible" label="Invisible button (disabled)" isDisabled={true} isLarge={true} />
					<ash.ui.Button label="Default submit button" isSubmit={true} isLarge={true} />
				</ash.ui.ButtonGroup>
			</section>

			<section>
				<h1 class={ash.ui.styles.sectionLevel1Heading}>Router</h1>

				<p>{`Language: ${language}`}</p>
				<p>{`Page: ${page}`}</p>
				<p>{`Story: ${story}`}</p>

				<ash.ui.ButtonGroup>
					<ash.ui.Button type="invisible" label="CZ foo/bar" link={`/${CZ}/foo/bar`} />
					<ash.ui.Button type="invisible" label="EN foo/bar" link={`/${EN}/foo/bar`} />
				</ash.ui.ButtonGroup>
			</section>

			<section>
				<h1 class={ash.ui.styles.sectionLevel1Heading}>Perf</h1>

				<ash.ui.ButtonGroup>
					<ash.ui.Button type="flat" label="Toggle grid" handleClick={this.handleToggleGrid} />
					<ash.ui.Button type="flat" label="Add items" handleClick={this.handleAddEvent} />
					<ash.ui.Button type="flat" label="Change color" handleClick={this.handleChangeColor} />
				</ash.ui.ButtonGroup>
				
				<div>{items}</div>
			</section>
		</div>;
	}

	onMount() {
		pageStream.on(this.update);
		storyStream.on(this.update);
		languageStream.on(this.update);
	}

	handleAddEvent() {
		for (let i = 0; i < 500; i++) { // eslint-disable-line no-magic-numbers
			this.state.items.push([Math.random() * 1000 >> 0]); // eslint-disable-line no-magic-numbers
		}

		this.update();
	}

	handleChangeColor() {
		this.state.isColored = !this.state.isColored;

		this.update();
	}

	handleToggleGrid() {
		if (document.querySelector('body').className) {
			document.querySelector('body').className = '';
		} else {
			document.querySelector('body').className = 'hasGrid';
		}

		this.update();
	}

	handleTextInputChange(value) {
		if (value === false) {
			this.state.isTextInputValid = false;
		} else {
			this.state.isTextInputValid = true;
		}

		this.update();
	}

	handleEmailInputChange(value) {
		if (value === false) {
			this.state.isEmailInputValid = false;
		} else {
			this.state.isEmailInputValid = true;
		}

		this.update();
	}

	handleTextareaChange(value) {
		if (value === false) {
			this.state.isTextareaValid = false;
		} else {
			this.state.isTextareaValid = true;
		}

		this.update();
	}
}
