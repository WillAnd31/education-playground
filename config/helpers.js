const path = require('path');
const _root = path.resolve(__dirname, '..');

module.exports = {
	fromRoot: (dirPath) => {
		return path.resolve(_root, dirPath);
	}
};