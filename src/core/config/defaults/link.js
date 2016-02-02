import durations from './durations';
import colors from './colors';

function sec(value) {
	return value + 's';
}

let link = {
	default: {
		color: colors.text,
		backgroundColor: 'transparent',
		fontWeight: 600,
		underlineWidth: 2,
		underlineColor: colors.secondary1.base,
		underlinePosition: '1.1em',
		transition: `color ${sec(durations.fastest)} ease-in, background-color ${sec(durations.fastest)} ease-in, border-color ${sec(durations.fastest)} ease-in`
	},
	visited: {
		color: colors.text,
		backgroundColor: 'transparent',
		underlineWidth: 2,
		underlineColor: colors.secondary1.base,
	},
	focused: {
		color: colors.secondary1.base,
		backgroundColor: 'transparent',
		underlineWidth: 2,
		underlineColor: colors.secondary1.base,
		outline: '0 none'
	},
	hovered: {
		color: colors.secondary1.base,
		backgroundColor: 'transparent',
		underlineWidth: 2,
		underlineColor: colors.secondary1.base,
	},

	heading: {
		default: {
			color: colors.text,
			backgroundColor: 'transparent',
			fontWeight: 'inherit',
			underlineWidth: 0,
			underlineColor: 'transparent',
			underlinePosition: '1.2em',
			transition: `color ${sec(durations.fastest)} ease-in, background-color ${sec(durations.fastest)} ease-in, border-color ${sec(durations.fastest)} ease-in`
		},
		visited: {
			color: colors.text,
			backgroundColor: 'transparent',
			underlineWidth: 0,
			underlineColor: 'transparent'
		},
		focused: {
			color: colors.secondary1.base,
			backgroundColor: 'transparent',
			underlineWidth: 0,
			underlineColor: 'transparent',
			outline: '0 none'
		},
		hovered: {
			color: colors.secondary1.base,
			backgroundColor: 'transparent',
			underlineWidth: 0,
			underlineColor: 'transparent'
		}
	}
};

export default link;
