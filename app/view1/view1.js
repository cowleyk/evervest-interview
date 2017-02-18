'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.toggleScenario = function(val){
    let scenid = parseInt(val);
    console.log(scenid);

    // loop over scenario json object, looking back would use .filter(function(scenario){
    //   return scenario.id === scenid;
    // })
    for (var i = 0; i < scensJson.length; i++) {
      console.log(scensJson[i].id);

      if(scensJson[i].id === scenid){
        // retrieve asset & capital id to reference w/ appropriate objects
        $scope.assetid = scensJson[i].asset_id;
        console.log($scope.assetid);
        $scope.capitalid = scensJson[i].capital_structure_id;
      }
    }

    // loop over asset object, assetJson.filter((asset) => asset.id === $scope.assetid)
    for (var i = 0; i < assetsJson.length; i++) {
      if(assetsJson[i].id === $scope.assetid){
        // bind asset's proper description and display id to the view
        $scope.assetDescription = assetsJson[i].description;
        $scope.assetDisplayId = assetsJson[i].display_id
      }
    }
    // loop over object, capJson.filter((cap) => cap.id === $scope.capitalid)
    for (var i = 0; i < capJson.length; i++) {
      if(capJson[i].id === $scope.capitalid){
        // bind capital structure's proper description and display id to the view
        $scope.capDescription = capJson[i].description;
        $scope.capDisplayId = capJson[i].display_id;
      }
    }
  };

  // $watch method on $scope triggers when scenarioSelectOne value is changed by dropdown
  // when value is changed, the toggleScenario() is triggered w/ the chosen value
  $scope.$watch('scenarioSelectOne', function(newValue, oldValue){
    console.log('watched!');
    console.log('new', newValue);
    console.log('old', oldValue);
    $scope.toggleScenario(newValue);
  });

}]);

const scensJson = [
    {
        "id":4,
        "project_id":1,
        "asset_id":3,
        "capital_structure_id":4,
        "stress_id":null,
        "description":"All equity",
        "done":true,
        "error_messages":null,
        "failure":null
    },
    {
        "id":5,
        "project_id":1,
        "asset_id":3,
        "capital_structure_id":5,
        "stress_id":null,
        "description":"TE and BL",
        "done":true,
        "error_messages":null,
        "failure":null
    },
    {
        "id":6,
        "project_id":1,
        "asset_id":3,
        "capital_structure_id":6,
        "stress_id":null,
        "description":"TE and BL revised",
        "done":true,
        "error_messages":null,
        "failure":null
    },
    {
        "id":7,
        "project_id":1,
        "asset_id":4,
        "capital_structure_id":4,
        "stress_id":8,
        "description":"All equity - GE turbines",
        "done":true,
        "error_messages":null,
        "failure":null
    },
    {
        "id":8,
        "project_id":1,
        "asset_id":3,
        "capital_structure_id":4,
        "stress_id":null,
        "description":"All equity - stressed",
        "done":true,
        "error_messages":null,
        "failure":null
    }
];

const assetsJson = [
    {
        "id":3,
        "project_id":1,
        "wind_resource_id":20,
        "offtake_agreement":[
            {
                "ramp":0.015,
                "type":"ppa",
                "terms":{
                    "percentage":1
                },
                "endDate":"2037-01-01",
                "offtaker":"Utility XYZ",
                "startDate":"2017-01-01",
                "startingPrice":40.5
            },
            {
                "ramp":0,
                "type":"merchant",
                "terms":{
                    "percentage":1
                },
                "endDate":"2047-01-01",
                "startDate":"2017-01-01",
                "startingPrice":45
            }
        ],
        "annual_maintenance_costs":{

        },
        "first_year_ramp_up":[
            1,
            1,
            1,
            1
        ],
        "description":"Base Case | Siemens 1.79-100",
        "display_id":1,
        "insurance":[
            {
                "startDate":"2017-01-01",
                "endDate":"2047-01-01",
                "name":"P&C",
                "cost":250000,
                "escalation":0.01
            }
        ],
        "landrent":[
            {
                "startDate":"2017-01-01",
                "endDate":"2047-01-01",
                "name":"Land Lease #1",
                "cost":1200000,
                "escalation":0.01
            },
            {
                "name":"Land Lease #2",
                "startDate":"2017-01-01",
                "endDate":"2025-01-01",
                "cost":750000,
                "escalation":0
            }
        ],
        "property_tax":[
            {
                "startDate":"2017-01-01",
                "endDate":"2047-01-01",
                "name":"Taxes",
                "cost":1200000,
                "escalation":0
            }
        ],
        "mw_installed": 450,
        "wtgs": 250,
        "turbines": [
            "Vestas 1.8 @ 80m",
            "GE 1.5 @ 60m"
        ]
    },
    {
        "id":4,
        "project_id":1,
        "wind_resource_id":18,
        "offtake_agreement":[
            {
                "ramp":0.02,
                "type":"ppa",
                "terms":{
                    "percentage":1
                },
                "endDate":"2037-12-31",
                "offtaker":"Utility XYZ",
                "startDate":"2016-12-31",
                "startingPrice":42
            },
            {
                "ramp":0.02,
                "type":"merchant",
                "terms":{
                    "percentage":1
                },
                "endDate":"2046-12-31",
                "startDate":"2037-01-01",
                "startingPrice":40
            }
        ],
        "annual_maintenance_costs":{
            "annual":250000
        },
        "first_year_ramp_up":[
            0,
            0,
            0,
            0
        ],
        "description":"Base Case | GE",
        "display_id":2,
        "insurance":[
            {
                "startDate":"2016-12-31",
                "endDate":"2046-12-31",
                "name":"Insurance",
                "cost":350000,
                "escalation":0.01
            }
        ],
        "landrent":[
            {
                "startDate":"2016-12-31",
                "endDate":"2046-12-31",
                "name":"Rent",
                "cost":1250000,
                "escalation":0.01
            }
        ],
        "property_tax":null,
        "mw_installed": 350,
        "wtgs": 100,
        "turbines": [
            "Vestas 1.8 @ 80m",
            "GE 1.5 @ 60m"
        ]
    }
]

const capJson = [
    {
        "id":4,
        "project_id":1,
        "use_of_funds":{
            "Turbine Cost":200000000,
            "Balance of Plant":100000000,
            "Development Costs":50000000,
            "Fees":15000000,
            "Interconnection":25000000,
            "Dev Fee":1000000
        },
        "construction_loan_terms":null,
        "construction_loan_draw_schedule":null,
        "target_irr":0.08,
        "target_value":null,
        "cod_financing":null,
        "macrs":{
            "MACRS5":0.75,
            "MACRS15":0.1,
            "MACRS25":0.05
        },
        "loan_size":null,
        "include_subsidies":true,
        "description":"Sponsor Equity",
        "display_id":1
    },
    {
        "id":5,
        "project_id":1,
        "use_of_funds":{
            "Turbine Cost":200000000,
            "Balance of Plant":100000000,
            "Development Costs":50000000,
            "Fees":15000000,
            "Interconnection":25000000
        },
        "construction_loan_terms":null,
        "construction_loan_draw_schedule":null,
        "target_irr":0.08,
        "target_value":null,
        "cod_financing":null,
        "macrs":{
            "MACRS5":0.75,
            "MACRS15":0.1,
            "MACRS25":0.05
        },
        "loan_size":null,
        "include_subsidies":true,
        "description":"Tax Equity - 8% IRR",
        "display_id":2
    },
    {
        "id":6,
        "project_id":1,
        "use_of_funds":{
            "Turbine Cost":179000000,
            "Balance of Plant":100000000,
            "Development Costs":25000000,
            "Fees":25000000,
            "Interconnection":25000000
        },
        "construction_loan_terms":null,
        "construction_loan_draw_schedule":null,
        "target_irr":0.08,
        "target_value":null,
        "cod_financing":null,
        "macrs":{
            "MACRS5":0.8,
            "MACRS15":0.1,
            "MACRS25":0.05
        },
        "loan_size":null,
        "include_subsidies":true,
        "description":"P-ship flip 8% / BL @5%",
        "display_id":3
    }
]
