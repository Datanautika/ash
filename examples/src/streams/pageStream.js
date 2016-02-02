import ash from 'ash';

import routeStream from './routeStream';


let pageStream = new ash.Stream({
	previous: null,
	current: null
});

pageStream.combine((dependency, self) => {
	let value = self.get();
	let {page} = dependency.get();

	if (page !== value.current) {
		let newValue = {
			current: page,
			previous: value.current
		};

		self.push(newValue);
	}
}, routeStream);

export default pageStream;
