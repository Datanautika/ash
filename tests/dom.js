/* eslint-disable no-magic-numbers */

import '../examples/dist/compat/internals/cssModules';

import ash from '../examples/node_modules/ash';

import TestApp1 from '../examples/dist/compat/components/TestApp1';
import createAshNodeTree from '../examples/node_modules/ash/core/view/createAshNodeTree';


function assertAshNodeTree(expected, actual) {
	for (let nodeProperty in actual) {
		if (actual.hasOwnProperty(nodeProperty)) {
			if (nodeProperty === 'properties') {
				for (let propertiesProperty in actual[nodeProperty]) {
					if (actual[nodeProperty][propertiesProperty].hasOwnProperty(propertiesProperty)) {
						if (expected[nodeProperty][propertiesProperty] !== actual[nodeProperty][propertiesProperty]) {
							throw new Error(`Expected and actual "${nodeProperty}.${propertiesProperty}" property mismatch: ${actual[nodeProperty][propertiesProperty]} should be ${expected[nodeProperty][propertiesProperty]}`);
						}
					}
				}
			} else if (nodeProperty !== 'children' && expected[nodeProperty] !== actual[nodeProperty]) {
				throw new Error(`Node ${actual.id} "${nodeProperty}" property value is "${actual[nodeProperty]}", but should be "${expected[nodeProperty]}"!`);
			}
		}
	}

	if (actual.children && actual.children.length) {
		for (let i = 0; i < actual.children.length; i++) {

			if (!(expected.children && expected.children[i])) {
				throw new Error(`Expected ash node tree doesn't have expected child!`);
			}

			assertAshNodeTree(expected.children[i], actual.children[i]);
		}
	}
}

describe('ash', () => {
	it('renders simple component', (done) => {
		let viewStream = new ash.ViewStream(<TestApp1 />);

		setTimeout(() => {
			let ashNodeTree = createAshNodeTree(viewStream.get());

			assertAshNodeTree(ashNodeTree, {
				id: '0',
				tagName: 'main',
				key: null,
				properties: {},
				children: [{
					id: '0.0',
					text: 'render 0'
				}]
			});

			done();
		}, 20);
	});

	it('rerenders simple component', (done) => {
		let updateStream = new ash.Stream();
		let viewStream = new ash.ViewStream(<TestApp1 updateStream={updateStream} />);

		setTimeout(() => {
			TestApp1.doneStream.on((count) => {
				let ashNodeTree = createAshNodeTree(viewStream.get());

				if (count >= 2) {
					assertAshNodeTree(ashNodeTree, {
						id: '0',
						tagName: 'main',
						key: null,
						properties: {},
						children: [{
							id: '0.0',
							text: 'render 1'
						}]
					});

					done();
				}
			});

			updateStream.push(true);
		}, 20);
	});
});
