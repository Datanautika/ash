import ash from 'ash';

import routeStream from './routeStream';


let storyStream = new ash.Stream({
	previous: null,
	current: null
});

storyStream.combine((dependency, self) => {
	let value = self.get();
	let {story} = dependency.get();

	if (story !== value.current) {
		let newValue = {
			current: story,
			previous: value.current
		};

		self.push(newValue);
	}
}, routeStream);

export default storyStream;
