import colors from './colors';
import text from './text';

import hexToRGBAString from '../../internals/hexToRGBAString';


let textInput = {};

textInput.default = {
	color: colors.text,
	backgroundColor: colors.background,
	borderColor: colors.neutral.tint[4],
	borderWidth: 2,
	borderRadius: '0.125bh',
	boxShadow: `inset 0 0.0625bh 0.0625bh ${hexToRGBAString(colors.neutral.base, 0.15)}`,
	fontSize: text.fontSize,

	placeholder: {
		color: colors.neutral.tint[3]
	}
};

textInput.default.invalid = {
	color: textInput.default.color,
	backgroundColor: textInput.default.backgroundColor,
	borderColor: colors.negative.base,
	boxShadow: textInput.default.boxShadow,

	placeholder: {
		color: textInput.default.placeholder.color
	}
};

textInput.default.focused = {
	color: textInput.default.color,
	backgroundColor: textInput.default.backgroundColor,
	borderColor: colors.secondary1.base,
	boxShadow: textInput.default.boxShadow,

	placeholder: {
		color: textInput.default.placeholder.color
	}
};

textInput.default.hovered = {
	color: textInput.default.color,
	backgroundColor: textInput.default.backgroundColor,
	borderColor: colors.secondary1.base,
	boxShadow: textInput.default.boxShadow,

	placeholder: {
		color: textInput.default.placeholder.color
	}
};

textInput.default.disabled = {
	color: colors.neutral.tint[4],
	backgroundColor: textInput.default.backgroundColor,
	borderColor: colors.neutral.tint[6],
	boxShadow: `inset 0 0.0625bh 0.0625bh ${hexToRGBAString(colors.neutral.base, 0.1)}`,

	placeholder: {
		color: colors.neutral.tint[7]
	}
};

export default textInput;
