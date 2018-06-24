angular.module('auditoriaApp')
.controller('informectrl', function($scope, ConexionServ, $filter, toastr, $location, $anchorScroll, $timeout){

  



  btGrid1 = '<a uib-tooltip="Editar" tooltip-placement="left" tooltip-append-to-body="true" class="btn btn-default btn-xs icon-only info" ng-click="grid.appScope.Ver_actualizar_iglesia(row.entity)"><i class="glyphicon glyphicon-pencil "></i></a>'
	btGrid2 = '<a uib-tooltip=" Eliminar" tooltip-placement="right" tooltip-append-to-body="true" class="btn btn-default btn-xs icon-only danger" ng-click="grid.appScope.EliminarIglesia(row.entity)"><i class="glyphicon glyphicon-remove  "></i></a>'
	bt2 	= '<span style="padding-left: 2px; padding-top: 4px;" class="btn-group">' + btGrid1 + btGrid2 + '</span>'
		
	$scope.gridOptions = {
		showGridFooter: true,
		enableSorting: true,
		enableFiltering: true,
		enebleGridColumnMenu: false,
		enableCellEdit: true,
		enableCellEditOnFocus: true,
		columnDefs: [
			{ name: 'no', displayName:'No', width: 45, enableCellEdit: false, enableColumnMenu: false, cellTemplate: '<div class="ui-grid-cell-contents">{{grid.renderContainers.body.visibleRowCache.indexOf(row)+1}}</div>'},
			{ name: 'edicion', displayName:'Edición', width: 60, enableSorting: false, enableFiltering: false, cellTemplate: bt2, enableCellEdit: false, enableColumnMenu: true},
			{ field: 'nombre' },
			{ field: 'alias' },
			{ field: 'codigo' },
			{ field: 'Distrito' },
			{ field: 'zona' },
			{ field: 'celular' },
			{ field: 'tesorero_nombres' }


		],
		onRegisterApi: function( gridApi ) {
			$scope.grid1Api = gridApi;
			gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue){

				if (newValue != oldValue){
					toastr.info('Aun no se guarda');
				}
			})
			$timeout(function(){ 
			  $scope.$apply()
			},0)
		}
	};

	// Traemos todos los datos que necesito para trabajar
    $scope.traerDatos = function() {

		// Traemos USUARIOS
		consulta = "SELECT rowid, nombres, apellidos, sexo, tipo, celular, username from usuarios";

		ConexionServ.query(consulta, []).then(function(result) {
			$scope.usuarios = result;

		}, function(tx) {
			console.log("Error no es posbile traer usuarios", tx);
		});
		
		// Traemos IGLESIAS
		$scope.consulta_igle = "SELECT i.rowid, i.nombre, i.alias, i.codigo,  i.distrito_id, i.zona,  i.tesorero_id,  i.secretario_id, " +
					"t.nombres as tesorero_nombres, t.apellidos as tesorero_apellidos, dis.nombre as nombre_distrito, s.nombres as secretario_nombres, s.nombres as secretario_apellidos " +
				"from iglesias i " +
				 "INNER JOIN distritos dis ON i.distrito_id = dis.rowid " +
				"LEFT JOIN usuarios t ON t.tipo='Tesorero' and t.rowid=i.tesorero_id "+
				"LEFT JOIN usuarios s ON s.tipo='Secretario' and s.rowid=i.secretario_id ";				

		ConexionServ.query($scope.consulta_igle, []).then(function(result) {
			$scope.iglesias = result;
			$scope.gridOptions.data = result;
		}, function(tx) {
			console.log("Error no es posbile traer usuarios", tx);
		});
		
		// Traemos DISTRITOS
		consulta = "SELECT d.rowid, d.*, "+
					"p.nombres as pastor_nombres, p.apellidos as pastor_apellidos, t.nombres as tesorero_nombres, t.apellidos as tesorero_apellidos " +
				"from distritos d " + 
	  			"LEFT JOIN usuarios p ON p.tipo='Pastor' and p.rowid=d.pastor_id "  +
	  			"LEFT JOIN usuarios t ON t.tipo='Tesorero' and t.rowid=d.tesorero_id ";


     

       
    	ConexionServ.query(consulta, []).then(function(result) {
          $scope.distritos = result;

        }, function(tx) {
          console.log("Error no es posbile traer Distritos", tx);
        });



        // Traemos Uniones
		consulta = "SELECT rowid, nombre, alias, codigo, division_id from uniones";

    	ConexionServ.query(consulta, []).then(function(result) {
          $scope.uniones = result;
        }, function(tx) {
          console.log("Error no es posbile traer Uniones", tx);
        });

         // Traemos Asociaciones
		consulta = "SELECT aso.rowid, aso.* , un.nombre as nombre_union, t.nombres as tesorero_nombres, t.apellidos as tesorero_apellidos from asociaciones aso " + 
		" INNER JOIN uniones un ON aso.union_id = un.rowid " +
		   " LEFT JOIN usuarios t ON t.tipo='Tesorero' and t.rowid= aso.tesorero_id ";

    	ConexionServ.query(consulta, []).then(function(result) {
          $scope.asociaciones = result;
        }, function(tx) {
          console.log("Error no es posbile traer asociaciones", tx);
        });
    };

	$scope.traerDatos();



	$scope.VerUniones = function(){
		$scope.MostrandoUniones = !$scope.MostrandoUniones
	}


	$scope.VerAsociaciones = function(){
		$scope.MostrandoAsociaciones = !$scope.MostrandoAsociaciones
	}

	$scope.VerDistritos = function(){
		$scope.MostrandoDistritos = !$scope.MostrandoDistritos
	}

	$scope.VerIglesias = function(){
		$scope.MostrandoIglesias = !$scope.MostrandoIglesias
	}
	
	




});