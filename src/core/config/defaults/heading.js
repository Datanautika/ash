import colors from './colors';
import typographicScale from './typographicScale';

let heading = {
	color: colors.text,
	fontFamily: `'Brandon Grotesque', Futura, 'Gill Sans', Calibri, 'Dejavu Sans', Arial, sans-serif`,
	fontFeatures: `'kern', 'liga', 'clig', 'calt', 'dlig', 'lnum', 'pnum'`,
	storyTitle: {
		fontSize: typographicScale[15],
		fontWeight: 700
	},
	storyLevel1: {
		fontSize: typographicScale[13],
		fontWeight: 700
	},
	storyLevel2: {
		fontSize: typographicScale[10],
		fontWeight: 700
	},
	storyLevel3: {
		fontSize: typographicScale[6],
		fontWeight: 700
	},
	storyLevel4: {
		fontSize: typographicScale[5],
		fontWeight: 700
	},
	sectionTitle: {
		fontSize: typographicScale[13],
		fontWeight: 700
	},
	sectionLevel1: {
		fontSize: typographicScale[6],
		fontWeight: 700
	},
	sectionLevel2: {
		fontSize: typographicScale[5],
		fontWeight: 700
	},
	sectionLevel3: {
		fontSize: typographicScale[4],
		fontWeight: 700
	},
	sectionLevel4: {
		fontSize: typographicScale[3],
		fontWeight: 700
	}
};

export default heading;
