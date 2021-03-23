/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
	if(!obj) {
		return obj;
	}
	const newObj = {};
	Object.entries(obj).forEach( function(item, index, array) {
		newObj[item[1]] = item[0];
	} );
	return newObj;
}
