'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = FormRow;

var _Form = require('./Form.css');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormRow(props, children) {
	var labelElement = props.id ? ash.createElement(
		'label',
		{ 'for': props.id },
		'' + props.label
	) : ash.createElement(
		'label',
		null,
		'' + props.label
	);

	return ash.createElement(
		'div',
		{ 'class': _Form2.default.row + (props.class && typeof props.class === 'string' ? ' ' + props.class : '') },
		ash.createElement(
			'div',
			{ 'class': _Form2.default.label },
			labelElement,
			props.hint ? ash.createElement(
				'span',
				{ 'class': _Form2.default.hint },
				props.hint
			) : null
		),
		ash.createElement(
			'div',
			{ 'class': _Form2.default.fields },
			children,
			ash.createElement(
				'div',
				{ 'class': _Form2.default.errorMessage + (props.showError ? ' isVisible' : '') },
				props.errorMessage || null
			)
		)
	);
}