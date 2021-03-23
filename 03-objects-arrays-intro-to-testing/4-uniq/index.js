/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
	const newArr = [];
	
	 if(!arr) {
		 return newArr;
	 }
	 
	arr.forEach( function(item, index, array) {
		if ( newArr.indexOf(item) === -1 ) {
			newArr.push(item);
		}
	} );
	return newArr;
}
