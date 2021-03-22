let binarySearchWithPartition = (array, element, compare = defaultCompare) => {
	if (array.length === 0) {
		return -1;
	}
	const middle = Math.floor(array.length / 2);
	const comparison = compare(element, array.get(middle));

	
};

