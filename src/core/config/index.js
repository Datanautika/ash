import defaults from './defaults';
import assign from '../internals/assign';

let config = defaults;

export function setConfig(userConfig) {
	config = assign({}, defaults, userConfig);

	return config;
}

export function getConfig() {
	return config;
}
