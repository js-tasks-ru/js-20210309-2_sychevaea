/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
	return function (obj) {
		const fields = path.split('.');
		let index = 0;
		let value;
					
		while(true) {
			if (index >= fields.length) break;
			
			if (index === 0) {
				value = obj[fields[index]];
			} else {
				value = value[fields[index]];
			}
			if(typeof value !== "object") break;
			index++;
		}
		return value;
	}
}
