import Component from '../../core/view/Component';
import styles from './Button.css';
import Router from '../../Router';


const MAILTO_REGEX = /^mailto:/;
const ROUTE_LINK_REGEX = /^\//;

let router = new Router();

export default class Button extends Component {
	props: {
		id: string,
		name: string,
		type: string,
		link: string,
		label: string,
		badge: string,
		isLarge: boolean,
		isDisabled: boolean,
		isSubmit: boolean,
		useRouter: boolean,
		handleClick: () => void
	};

	shouldUpdate(newProps) {
		return newProps.id !== this.props.id ||
			newProps.name !== this.props.name ||
			newProps.type !== this.props.type ||
			newProps.link !== this.props.link ||
			newProps.label !== this.props.label ||
			newProps.badge !== this.props.badge ||
			newProps.isLarge !== this.props.isLarge ||
			newProps.isDisabled !== this.props.isDisabled ||
			newProps.isSubmit !== this.props.isSubmit ||
			newProps.useRouter !== this.props.useRouter ||
			newProps.handleClick !== this.props.handleClick;
	}

	render() {
		let buttonClass = styles.default;

		if (this.props.type === 'flat') {
			buttonClass = styles.flat;
		} else if (this.props.type === 'invisible') {
			buttonClass = styles.invisible;
		}

		buttonClass += this.props.isLarge ? ' isLarge' : '';

		let buttonElement = null;

		if (this.props.isSubmit) {
			buttonElement = <input
				class={buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled')}
				type="submit"
				name={this.props.name || this.props.id || ''}
				id={this.props.id || this.props.name || ''}
				value={this.props.label || ''}
				events={{
					click: this.handleClick
				}}
			/>;
		} else if (this.props.link) {
			buttonElement = <a
				class={buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled')}
				href={this.props.link ? this.props.link : '#'}
				events={{
					click: this.handleClick
				}}>
				{this.props.label || null}
				{this.props.badge ? <span class={styles.badge}>{this.props.badge}</span> : null}
			</a>;
		} else {
			buttonElement = <button
				class={buttonClass + (this.props.isDisabled ? ' isDisabled' : ' isEnabled')}
				events={{
					click: this.handleClick
				}}>
				{this.props.label || null}
				{this.props.badge ? <span class={styles.badge}>{this.props.badge}</span> : null}
			</button>;
		}

		return buttonElement;
	}

	handleClick(event) {
		if (!(this.props.link || MAILTO_REGEX.test(this.props.link))) {
			event.preventDefault();

			if (this.props.handleClick) {
				this.props.handleClick();
			}
		} else if (ROUTE_LINK_REGEX.test(this.props.link) && this.props.useRouter !== false) {
			event.preventDefault();

			router.navigate(this.props.link);
		}
	}
}
