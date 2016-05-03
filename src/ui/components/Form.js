export default function Form(props, children) {
	let formProps = {};

	if (props.class && typeof props.class === 'string') {
		formProps.class = props.class;
	}

	return <form {...formProps}>{children}</form>;
}
