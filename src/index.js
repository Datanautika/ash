import support from './core/support';
import styles from './core/styles/ash.css';
import {setConfig, getConfig} from './core/config';
import Component from './core/view/Component';
import AshElement from './core/view/AshElement';
import ViewStream from './core/view/ViewStream';
import Stream from './core/stream/Stream';
import isAncestor from './core/utils/isAncestor';
import flattenTree from './core/utils/flattenTree';
import renderViewStream from './core/domRenderer/renderViewStream';
import stringifyViewStream from './core/textRenderer/stringifyViewStream';


/**
 * Ash object.
 *
 * @version 0.2.1
 */
let ash = {
	/**
	 * Version number.
	 *
	 * @type {string}
	 */
	VERSION: '0.2.1',

	/**
	 * Support object.
	 *
	 * @link  {support}
	 */
	support,

	/**
	 * Class names for internal CSS.
	 *
	 * @type {object}
	 */
	styles,

	get config() {
		return getConfig();
	},

	set config(configObject) {
		setConfig(configObject);
	},

	Component,
	ViewStream,
	createElement: AshElement.create,

	Stream,

	renderViewStream,
	stringifyViewStream,

	isAncestor,
	flattenTree
};

export default ash;
