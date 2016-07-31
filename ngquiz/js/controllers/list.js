	
	(function(){	
		angular
			.module('turtleFactsQuizApp')
			.controller('listCtrl', FnListController);		
	})();
	
	function FnListController(){		
		console.log('listCtrl:FnListController');
		this.dummyData="Welcome ng-welcome";
		
	}
