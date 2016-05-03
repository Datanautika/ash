import colors from './colors';
import text from './text';
import typographicScale from './typographicScale';

import hexToRGBAString from '../../internals/hexToRGBAString';
import tintHex from '../../internals/tintHex';


let button = {};

button.default = {
	depth: '0.125bh',
	color: colors.secondary1.shade[3],
	backgroundColor: colors.secondary1.base,
	sideColor: colors.secondary1.shade[1],
	borderColor: 'transparent',
	borderWidth: 0,
	borderRadius: '0.125bh',
	boxShadow: `0 0.125bh 0.125bh ${hexToRGBAString(colors.neutral.base, 0.4)}`,
	fontSize: text.fontSize,
	
	badge: {
		color: colors.background,
		backgroundColor: colors.primary1.base,
		borderRadius: '1bh',
		fontSize: typographicScale[4]
	}
};

button.default.focused = {
	depth: '0.125bh',
	color: colors.secondary1.shade[3],
	backgroundColor: colors.secondary1.tint[1],
	sideColor: colors.secondary1.shade[1],
	borderColor: 'transparent',
	boxShadow: `0 0.125bh 0.125bh ${hexToRGBAString(colors.neutral.base, 0.4)}`
};

button.default.hovered = {
	depth: '0.125bh',
	color: colors.secondary1.shade[3],
	backgroundColor: tintHex(colors.secondary1.base, 0.1),
	sideColor: tintHex(colors.secondary1.shade[1], 0.1),
	borderColor: 'transparent',
	boxShadow: `0 0.125bh 0.125bh ${hexToRGBAString(colors.neutral.base, 0.4)}`
};

button.default.pressed = {
	depth: '0.0625bh',
	color: colors.secondary1.shade[3],
	backgroundColor: button.default.hovered.backgroundColor,
	sideColor: button.default.hovered.sideColor,
	borderColor: 'transparent',
	boxShadow: `0 0.0625bh 0.0625bh ${hexToRGBAString(colors.neutral.base, 0.3)}`
};

button.default.disabled = {
	depth: '0.125bh',
	color: colors.neutral.tint[3],
	backgroundColor: colors.neutral.tint[5],
	sideColor: colors.neutral.tint[3],
	borderColor: 'transparent',
	boxShadow: `0 0.125bh 0.125bh ${hexToRGBAString(colors.neutral.base, 0.4)}`,
	
	badge: {
		color: colors.background,
		backgroundColor: colors.neutral.tint[3]
	}
};

button.flat = {
	depth: '0',
	translateY: '0.0625bh',
	color: colors.secondary1.shade[3],
	backgroundColor: colors.background,
	sideColor: 'transparent',
	borderColor: colors.secondary1.base,
	borderWidth: 2,
	borderRadius: '0.125bh',
	boxShadow: `0 0.0625bh 0.0625bh ${hexToRGBAString(colors.neutral.base, 0.15)}`,
	fontSize: text.fontSize,
	
	badge: {
		color: colors.background,
		backgroundColor: colors.primary1.base,
		borderRadius: '1bh',
		fontSize: typographicScale[4]
	}
};

button.flat.focused = {
	depth: button.flat.depth,
	translateY: button.flat.translateY,
	color: button.flat.color,
	backgroundColor: button.flat.backgroundColor,
	sideColor: button.flat.sideColor,
	borderColor: button.flat.borderColor,
	borderWidth: button.flat.borderWidth,
	borderRadius: button.flat.borderRadius,
	boxShadow: button.flat.boxShadow,
	fontSize: button.flat.fontSize
};

button.flat.hovered = {
	depth: button.flat.depth,
	translateY: button.flat.translateY,
	color: button.flat.color,
	backgroundColor: button.flat.backgroundColor,
	sideColor: button.flat.sideColor,
	borderColor: tintHex(button.flat.borderColor, 0.1),
	borderWidth: button.flat.borderWidth,
	borderRadius: button.flat.borderRadius,
	boxShadow: button.flat.boxShadow,
	fontSize: button.flat.fontSize
};

button.flat.pressed = {
	depth: button.flat.depth,
	translateY: '0.125bh',
	color: button.flat.color,
	backgroundColor: button.flat.backgroundColor,
	sideColor: button.flat.sideColor,
	borderColor: button.flat.hovered.borderColor,
	borderWidth: button.flat.borderWidth,
	borderRadius: button.flat.borderRadius,
	boxShadow: `0 0.03125bh 0.03125bh ${hexToRGBAString(colors.neutral.base, 0.15)}`,
	fontSize: button.flat.fontSize
};

button.flat.disabled = {
	depth: button.flat.depth,
	translateY: button.flat.translateY,
	color: colors.neutral.tint[3],
	backgroundColor: button.flat.backgroundColor,
	sideColor: button.flat.sideColor,
	borderColor: colors.neutral.tint[5],
	borderWidth: button.flat.borderWidth,
	borderRadius: button.flat.borderRadius,
	boxShadow: `0 0.0625bh 0.0625bh ${hexToRGBAString(colors.neutral.base, 0.1)}`,
	fontSize: button.flat.fontSize
};

button.invisible = {
	depth: '0',
	translateY: '0.0625bh',
	color: colors.secondary1.shade[3],
	backgroundColor: colors.background,
	sideColor: 'transparent',
	borderColor: 'transparent',
	borderWidth: 2,
	borderRadius: '0.125bh',
	boxShadow: `0 0.0625bh 0.0625bh ${hexToRGBAString(colors.neutral.base, 0)}`,
	fontSize: text.fontSize,
	
	badge: {
		color: colors.background,
		backgroundColor: colors.primary1.base,
		borderRadius: '1bh',
		fontSize: typographicScale[4]
	}
};

button.invisible.focused = {
	depth: button.invisible.depth,
	translateY: button.invisible.translateY,
	color: button.invisible.color,
	backgroundColor: button.invisible.backgroundColor,
	sideColor: button.invisible.sideColor,
	borderColor: button.invisible.borderColor,
	borderWidth: button.invisible.borderWidth,
	borderRadius: button.invisible.borderRadius,
	boxShadow: button.invisible.boxShadow,
	fontSize: button.invisible.fontSize
};

button.invisible.hovered = {
	depth: button.invisible.depth,
	translateY: button.invisible.translateY,
	color: button.invisible.color,
	backgroundColor: button.invisible.backgroundColor,
	sideColor: button.invisible.sideColor,
	borderColor: colors.secondary1.base,
	borderWidth: button.invisible.borderWidth,
	borderRadius: button.invisible.borderRadius,
	boxShadow: `0 0.0625bh 0.0625bh ${hexToRGBAString(colors.neutral.base, 0.15)}`,
	fontSize: button.invisible.fontSize
};

button.invisible.pressed = {
	depth: button.invisible.depth,
	translateY: '0.125bh',
	color: button.invisible.color,
	backgroundColor: button.invisible.backgroundColor,
	sideColor: button.invisible.sideColor,
	borderColor: colors.secondary1.base,
	borderWidth: button.invisible.borderWidth,
	borderRadius: button.invisible.borderRadius,
	boxShadow: `0 0.03125bh 0.03125bh ${hexToRGBAString(colors.neutral.base, 0.15)}`,
	fontSize: button.invisible.fontSize
};

button.invisible.disabled = {
	depth: button.invisible.depth,
	translateY: button.invisible.translateY,
	color: colors.neutral.tint[3],
	backgroundColor: button.invisible.backgroundColor,
	sideColor: button.invisible.sideColor,
	borderColor: colors.neutral.tint[5],
	borderWidth: button.invisible.borderWidth,
	borderRadius: button.invisible.borderRadius,
	boxShadow: `0 0.0625bh 0.0625bh ${hexToRGBAString(colors.neutral.base, 0)}`,
	fontSize: button.invisible.fontSize
};

export default button;
