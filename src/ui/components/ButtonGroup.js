import styles from './Button.css';


export default function ButtonGroup(props, children) {
	return <div class={styles.buttonGroup}>{children}</div>;
}
