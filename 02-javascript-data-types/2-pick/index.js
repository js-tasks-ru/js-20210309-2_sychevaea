/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
	const result = {};
	const keyValuePairs = Object.entries(obj);
	
	keyValuePairs.forEach(function(item, index, array){
		let k = item[0];
		let v = item[1];
		
		fields.map(function(field, index, array){
			if(field == k){
				result[field] = v;
			}
		});
	});
	return result;
};
