/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
	let newStr = '';
	
	function substrOfDuplicates(string, start) {
		const symb = string[start];
		let substr = '';
		
		let index = start;
		while(true) {
			if (!string[index]) break;
			if (string[index] !== symb) break;
			
			substr = substr + string[index];
			index++;
		}
		return substr;
	}
	
	let index = 0;
	while(true) {
		if (index >= string.length) break;
		
		const duplicates = substrOfDuplicates(string, index);
		
		if (duplicates.length > size) {
			newStr += (string[index]).repeat(size);
		} else {
			newStr += duplicates;
		}
		index += duplicates.length;
	}
	return newStr;
}
