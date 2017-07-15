(function(){
	var domEl = 'timeseries';
	var data = [{'value': Date.parse(1991)},{'value': Date.parse(2001)}];
	var brushEnabled = true;
	timeseries(domEl, data, brushEnabled);
})();