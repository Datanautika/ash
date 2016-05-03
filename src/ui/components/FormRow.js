import styles from './Form.css';


export default function FormRow(props, children) {
	let labelElement = props.id ? <label for={props.id}>{`${props.label}`}</label> : <label>{`${props.label}`}</label>;

	return <div class={styles.row + (props.class && typeof props.class === 'string' ? ` ${props.class}` : '')}>
		<div class={styles.label}>
			{labelElement}
			{props.hint ? <span class={styles.hint}>{props.hint}</span> : null}
		</div>
		<div class={styles.fields}>
			{children}
			<div class={styles.errorMessage + (props.showError ? ' isVisible' : '')}>{props.errorMessage || null}</div>
		</div>
	</div>;
}
