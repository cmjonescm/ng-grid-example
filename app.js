
var app = angular.module('app', ['ngGrid']);

app.controller('bodyController', function($scope) {
    $scope.myData = [
        { precursor: '500', charge: '1', DT:'720', CCS:'243', Cone:'35', Product:500, CE:'30' },
        { precursor: '600', charge: '1', DT:'720', CCS:'243', Cone:'35', Product:500, CE:'30' },
        { precursor: '700', charge: '1', DT:'720', CCS:'243', Cone:'35', Product:500, CE:'30' },
        { precursor: '800', charge: '1', DT:'720', CCS:'243', Cone:'35', Product:500, CE:'30' }
    ];

    var plotCheckboxCellTemplate='<div class="ngSelectionCell">' +
                                '<input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-model="data.plot" ng-click="plotClick(row.rowIndex, row.entity)" />' +
                            '</div>';

    var isolateCheckboxCellTemplate='<div class="ngSelectionCell">' +
        '<input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-model="data.plot" ng-click="isolateClick(row.rowIndex, row.entity)" />' +
        '</div>';

    var enhanceCheckboxCellTemplate='<div class="ngSelectionCell">' +
        '<input tabindex="-1" class="ngSelectionCheckbox" type="checkbox" ng-model="data.plot" ng-click="enhanceClick(row.rowIndex, row.entity)" />' +
        '</div>';



    $scope.gridOptions = {
        data: 'myData',
        enableCellSelection: false,
        enableRowSelection: false,
        enableCellEditOnFocus: false,
        selectWithCheckboxOnly:true,
        columnDefs: [
            { field: 'plot', cellTemplate:plotCheckboxCellTemplate, width: 60, isClone:false },
            { field: 'precursor', enableCellEdit: true, width: 80 },
            { field: 'charge', enableCellEdit: true, width: 60 },
            { field: 'DT', enableCellEdit: true, width: 60 },
            { field: 'CCS', enableCellEdit: true, width: 60 },
            { field: 'Cone', enableCellEdit: true, width: 60 },
            { field: 'Isolate', cellTemplate:isolateCheckboxCellTemplate, width: 60 },
            { field: 'Product', enableCellEdit: true, width: 80 },
            { field: 'CE', enableCellEdit: true, width: 80 },
            { field: 'Enhance', cellTemplate:enhanceCheckboxCellTemplate, width: 100 }

            // DT, CCS, Cone, Isolate, Product, CE, Enhance
        ],
        canSelectRows: false
    };


    $scope.plotClick = function(row, data) {
        console.log("Plot:");
        console.log(data);
        console.log(row);
    };

    $scope.isolateClick = function(row, data) {
        console.log("Isolate:");
        console.log(data);
        console.log(row);
    };

    $scope.enhanceClick = function(row, data) {
        console.log("Enhance");
        console.log(data);
        console.log(row);
    };



});