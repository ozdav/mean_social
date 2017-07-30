angular.module('core.filters').filter('countK', function () {
    return function (input) {
    	if (input <= 0){
    		return '-'
    	}
    	else{
        	var fValue = parseFloat(input) / parseFloat(1000);
        	fValue = Math.round( fValue * 10 ) / 10 +'k'; 
        	return fValue;
        }
    }
})