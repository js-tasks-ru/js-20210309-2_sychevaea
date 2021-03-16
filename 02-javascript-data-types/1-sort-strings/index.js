/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
	
	function compareString(a, b){
		let result = a.localeCompare(b,['ru','en-US'], {caseFirst:"upper"});
			
		if (result == 0){
			return 0;
		} else if (result < 0 && param == 'asc'){
			return -1; 				
		} else if (result > 0 && param == 'desc'){
			return -1;
		} else {
			return 1;
		}
	}
		
	const sortedArr = [];		
	for(let i = 0; i < arr.length; i++) {
		sortedArr[i] = arr[i];
	}
	sortedArr.sort(compareString);
	return sortedArr;
}
