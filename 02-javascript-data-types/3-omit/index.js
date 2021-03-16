/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
	const result = {};
	const keyValuePairs = Object.entries(obj);
			
	keyValuePairs.forEach(function(item, index, array){
	 let k = item[0];
	 let v = item[1];
	 
	 if (!fields.includes(k)){
		 result[k] = v;
	 }
	});
	return result;
};
