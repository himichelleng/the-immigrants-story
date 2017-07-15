(function(){
	var domEl = 'timeseries';
	var data = [{'value': Date.parse(1999)},
	            {'value': Date.parse(1968)},
	            {'value': Date.parse(1993)},
	            {'value': Date.parse(1977)},
	            {'value': Date.parse(1981)},
	            {'value': Date.parse(1982)},
	            {'value': Date.parse(1992)},
	            {'value': Date.parse(2000)},
	            {'value': Date.parse(1910)},
	            {'value': Date.parse(1992)},
	            {'value': Date.parse(1921)},
	            {'value': Date.parse(1888)},
	            {'value': Date.parse(1830)},
	            {'value': Date.parse(2000)},
	            {'value': Date.parse(1885)},
	            {'value': Date.parse(1915)}
	            ];

	var brushEnabled = true;
	timeseries(domEl, data, brushEnabled);
})();