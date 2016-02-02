import Stream from '../stream/Stream';
import isComponentAshElement from '../internals/isComponentAshElement';
import setAnimationTimeout from '../internals/setAnimationTimeout';
import createAshElementTree from './createAshElementTree';
import updateAshElementTree from './updateAshElementTree';
import mountComponents from './mountComponents';


let streamId = 0;

/**
 * ViewStream class.
 */
export default class ViewStream extends Stream {
	id = streamId++;
	isUpdating = false;
	isRendering = false;

	/**
	 * Creates view stream.
	 *
	 * @param {AshElement} componentAshElement
	 * @returns {ViewStream}
	 */
	constructor(componentAshElement) {
		if (!isComponentAshElement(componentAshElement)) {
			throw new Error(`${componentAshElement} (componentAshElement) must be an Component AshElement object instance.`);
		}

		if (componentAshElement.stream instanceof ViewStream) {
			throw new Error(`${componentAshElement} (componentAshElement) was already passed to a view stream.`);
		}

		super();

		this.isUpdating = true;
		this.isRendering = true;

		setAnimationTimeout(() => {
			this.push(createAshElementTree(componentAshElement, this));
			mountComponents(this.value);

			this.isRendering = false;
		});

		this.isUpdating = false;

		return this;
	}

	/**
	 * Pushes `value` to the stream; if view stream already has a value, its AshElement tree and AshNode tree are updated.
	 *
	 * @param {*} value
	 * @returns {this}
	 */
	push(value) {
		if (this.hasValue) {
			if (this.isUpdating) {
				throw new Error('You cannot update components during previous update!');
			}

			this.isUpdating = true;

			// if there is already a scheduled update, we won't render twice
			if (!this.isRendering) {
				this.isRendering = true;

				setAnimationTimeout(() => {
					super.push(updateAshElementTree(this.value, this));
					mountComponents(this.value);

					this.isRendering = false;
				});
			}

			this.isUpdating = false;
		} else {
			super.push(value);
		}

		return this;
	}
}
