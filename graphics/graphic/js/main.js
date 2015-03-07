var data = require('../../../data/data.json');

function log(s) {
	console.log(JSON.stringify(s, null, 4));
}

log(data);

var master = $('.article-graphic.graphic');

$('.icerinks', master).html(_.templates.icerinks({
	icerinks: _.chain(data)
		.map(function(v, i) {

			var hoursParts = v.Hours.split(':');

			return {
				icerink: v.Town,
				status: v.Status,
				hours: +hoursParts[0] + +(hoursParts[1]/60)
			};
		})
		.sortBy('icerink')
		.reverse()
		.sortBy('hours')
		.reverse()
		.value()
}));