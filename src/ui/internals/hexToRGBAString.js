import hexToRGB from './hexToRGB';

export default function hexToRGBAString(value, transparency = 1) {
	let rgbValue = hexToRGB(value);
	
	return `rgba(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]}, ${transparency})`;
}
