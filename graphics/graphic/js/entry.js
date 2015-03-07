(function() { globe.onDefine('window.jQuery && $(".article-graphic.graphic").length', function() {

	require('./templates/templates.js');

	var masterSelector = '.article-graphic.graphic';
	var master = $(masterSelector);


	require('./main.js');

}); }());