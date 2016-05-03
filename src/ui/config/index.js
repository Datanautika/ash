import defaults from './defaults';
import assign from '../../core/internals/assign';


let config = defaults;

export function setConfig(userConfig) {
	config = assign({}, defaults, userConfig);

	return config;
}

export function getConfig() {
	return config;
}
