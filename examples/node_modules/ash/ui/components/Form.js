'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Form;
function Form(props, children) {
	var formProps = {};

	if (props.class && typeof props.class === 'string') {
		formProps.class = props.class;
	}

	return ash.createElement(
		'form',
		formProps,
		children
	);
}