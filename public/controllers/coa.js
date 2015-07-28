angular.module("MyApp")
	.controller("CustomOrderAppCtrl", function ($scope) {
			$scope.fields = ["Strategy", "Basis Points", "Trade Value", "Shares", "Trade %"];
			$scope.transactions = [
				{"strategy" : "MasterLit", "basispoints" : 0, "tradevalue" : 0, "shares" : 0, "tradepct" : 0},
				{"strategy" : "FeQBeta", "basispoints" : 0, "tradevalue" : 0, "shares" : 0, "tradepct" : 0},
				{"strategy" : "Focused", "basispoints" : 0, "tradevalue" : 0, "shares" : 0, "tradepct" : 0},
				{"strategy" : "Global", "basispoints" : 0.25, "tradevalue" : 2536335.61, "shares" : 22840, "tradepct" : 0.23},
				{"strategy" : "GlblYlDr", "basispoints" : 0, "tradevalue" : 0, "shares" : 0, "tradepct" : 0},
				{"strategy" : "GlblYlDu", "basispoints" : 0, "tradevalue" : 0, "shares" : 0, "tradepct" : 0},
				{"strategy" : "International", "basispoints" : 0.25, "tradevalue" : 6955140.66, "shares" : 62631, "tradepct" : 0.6308},
				{"strategy" : "TradeEuro", "basispoints" : 0.25, "tradevalue" : 1535277.36, "shares" : 13825, "tradepct" : 0.1392},
				{"strategy" : "Total", "basispoints" : null, "tradevalue" : 11026753.53, "shares" : 99295, "tradepct" : 1},
			];
			$scope.curretAction
	});