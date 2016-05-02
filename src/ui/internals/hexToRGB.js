export default function hexToRGB(value) {
	let hexString;
	
	if (value.length === 4) {
		hexString = '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3];
	} else {
		hexString = '' + value;
	}

	let hex = parseInt(hexString.substring(1), 16);

	return [(hex & 0xff0000) >> 16, (hex & 0x00ff00) >> 8, hex & 0x0000ff];
}
