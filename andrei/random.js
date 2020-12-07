function twoNumberSum(array, targetSum) {
	array.sort((a,b)=>a-b); 
	let left=0;
	let right=array.lenght-1;
  while(left<right){
		const sumaActual = array[left]+array[right];
		if (sumaActual===targetSum){
			return [array[left],array[right]];
		}	else if (sumaActual<targetSum){
			left++;
		}	else if (sumaActual>targetSum){
			right--;
		}
	}
	return[];
}