const arr1 = [5, 1, 22, 25, 6, -1, 8, 10];
const arr2 = [1, 6, -1, 10];
function isValidSubsequence(array, sequence) {
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		if (array.length <= sequence.length) {
			return false;
		} else {
			if (sequence.includes(array[i])) {
				counter++;
				console.log(counter);
			}
			if (counter === sequence.length) {
				console.log("counter");
				return true;
			}
		}
	}
	return false;
}

function findClosestValueInBst(tree, target) {
	return helper(tree, target, tree.value);
}

const helper = (tree, target, closest) => {
	const currentNode = closest;
};

function combinarArregloOrdenado(arr1, arr2) {
	let idx1 = 0;
	let idx2 = 0;
	const sortedArray = [];
	const len = arr1.length + arr2.length;
	while (idx1 + idx2 < len) {
		if (arr1[idx1] < arr2[idx2]) {
			sortedArray.push(arr1[idx1]);
			idx1++;
		} else if (arr1[idx1] > arr2[idx2]) {
			sortedArray.push(arr2[idx2]);
			idx2++;
		} else {
			sortedArray.push(arr1[idx1]);
			idx1++;
		}
	}
	console.log(sortedArray);
}

combinarArregloOrdenado([0, 3, 4, 31], [4, 6, 30]);
