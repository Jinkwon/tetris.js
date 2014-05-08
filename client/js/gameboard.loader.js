/**
 * @description 
 * gameboard.loader
 * 파일 의존성 관리 및 앱 호출
 */
requirejs.config({
	baseUrl : 'js',
	urlArgs : "bust="+ (new Date()).getTime(),
	waitSeconds : 45,
	paths : {
		'underscore' : 'lib/underscore-min',
		'backbone' : 'lib/backbone',
		'jquery' : 'lib/jquery',
		'jquery-ui' : 'lib/jquery-ui',
		'jq-blockui' : 'lib/jquery.blockUI',
		'socket.io' : 'lib/socket.io',
		'jq-slide' : 'lib/slides.min.jquery',
		'jq-cookie' : 'lib/jquery.cookie',
		'glmatrix' : 'lib/glmatrix',
		'buzz' : 'lib/buzz',
		'sidetap' : 'lib/sidetap.min'
	},
	shim : {
		'backbone' : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		
		'jquery' : {
			exports : '$'	
		},
		
		'jq-slide' : {
			deps : ['jquery']
		},
		
		'jq-cookie' : {
			deps : ['jquery']
		},
		
		'jquery-ui' : {
			deps : ['jquery']
		},
				
		'sidetap' : {
			deps : ['jquery']	
		},
		
		'app.tetris.gamemodel' : {
			deps : ['backbone', 'app.tetris']
		},
		
		'app.tetris.gameview' : {
			deps : ['backbone', 'jquery', 'app.tetris']
		},
		
		'app.tetris.uiview' : {
			deps : ['backbone', 'jquery-ui', 'jq-slide', 'app.tetris',  'buzz', 'sidetap']
		},
		
		'app.tetris.block.model' : {
			deps : ['backbone', 'app.tetris']
		},
		
		'app.webgl.util' : {
			deps : ['app.webgl']			
		},
		
		'app.webgl' : {
			deps : ['backbone', 'app', 'glmatrix']
		},
		
		'app.tetris.gameboard' : {
			deps : ['jq-cookie', 'jq-blockui', 'app.tetris']
		},
		
		'app.tetris.util' : {
			deps : ['app.tetris']			
		},
		
		'app.tetris.network' : {
			deps : ['socket.io', 'app.tetris']
		},
		
		'app.tetris' : {
			deps : ['app']
		},
		
		'app' : {
			deps : [
				
			]
		}
	}
});

requirejs([
	'app.webgl.util',
	'app.tetris.network',
	'app.tetris.util',
	'app.tetris.gameboard',
	'app.tetris.block.model',
	'app.tetris.gamemodel', 
	'app.tetris.gameview',
	'app.tetris.uiview'
	], function(){

	app.tetris.gameboard();
	
});