angular.module("auditoriaApp")

.controller("EntidadesCtrl", function($scope, ConexionServ, $filter, toastr, $location, $anchorScroll, $timeout) {
    $scope.entidades 		= true;
    $scope.distrito_new 	= {};
	$scope.modentidades 	= false;
	$scope.verCrearDistrito = false;
	$scope.usuarios 		= [];

	
	btGrid1 = '<a uib-tooltip="Editar" tooltip-placement="left" class="btn btn-default btn-xs icon-only info" ng-click="grid.appScope.VerActualizarDistrito(row.entity)"><i class="glyphicon glyphicon-pencil "></i></a>'
	btGrid2 = '<a uib-tooltip="X Eliminar" tooltip-placement="right" class="btn btn-default btn-xs icon-only danger" ng-click="grid.appScope.eliminar(row.entity)"><i class="glyphicon glyphicon-remove  "></i></a>'
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
		
	
	$scope.crear_distrito = function() {
		$scope.verCrearDistrito = !$scope.verCrearDistrito;
	};
    $scope.cancelar_crear_distrito = function() {
		$scope.distrito_new 	= {};
		$scope.verCrearDistrito = false;
	};
	
	$scope.insertar_distrito = function (distrito) {
		console.log(distrito);
		$scope.pastor_new_id 	= null;
		$scope.tesorero_new_id 	= null;
		
		if (distrito.pastor) {
			if (distrito.pastor.rowid) {
				$scope.pastor_new_id = distrito.pastor.rowid;
			}
		}
		
		if (distrito.tesorero) {
			if (distrito.tesorero.rowid) {
				$scope.tesorero_new_id = distrito.tesorero.rowid;
			}
		}
		
		consulta = 'INSERT INTO distritos(nombre, alias, zona, pastor_id, tesorero_id) VALUES(?,?,?,?,?)';
		
		ConexionServ.query(consulta, [distrito.nombre, distrito.alias, distrito.zona, $scope.pastor_new_id, $scope.tesorero_new_id]).then(function(result) {
			$scope.traerDatos();
			  toastr.success('Se ha creado un nuevo Distrito Exitosamente.');
		}, function(tx) {
			console.log("Error no es posbile traer Distritos", tx);
		});
		
	}
	  
	  

    $scope.crearI = function() {
      $scope.vercrear = !$scope.vercrear;
    };


    $scope.modentidad = function(entidad) {
      $scope.modentidades = !$scope.modentidades;

      $scope.entidad_editar = entidad;
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
		consulta = "SELECT i.rowid, i.nombre, i.alias, i.distrito_id, i.tesorero_id, i.secretario_id, "+
					"t.nombres as tesorero_nombres, t.apellidos as tesorero_apellidos " +
				"from iglesias i "+
				"LEFT JOIN usuarios t ON t.tipo='Tesorero' and t.rowid=i.tesorero_id "+
				"LEFT JOIN usuarios s ON s.tipo='Secretario' and s.rowid=i.secretario_id ";

		ConexionServ.query(consulta, []).then(function(result) {
			$scope.iglesias = result;
			$scope.gridOptions.data = result;
		}, function(tx) {
			console.log("Error no es posbile traer usuarios", tx);
		});
		
		// Traemos DISTRITOS
		consulta = "SELECT d.rowid, d.*, "+
					"p.nombres as pastor_nombres, p.apellidos as pastor_apellidos "+
				"from distritos d " + 
	  			"INNER JOIN usuarios p ON p.tipo='Pastor' and p.rowid=d.pastor_id";

    	ConexionServ.query(consulta, []).then(function(result) {
          $scope.distritos = result;
        }, function(tx) {
          console.log("Error no es posbile traer Iglesias", tx);
        });


        // Traemos Uniones
		consulta = "SELECT rowid, nombre, alias, codigo, division_id from uniones";

    	ConexionServ.query(consulta, []).then(function(result) {
          $scope.uniones = result;
        }, function(tx) {
          console.log("Error no es posbile traer Uniones", tx);
        });
    };

	$scope.traerDatos();
	
	
	

    $scope.Insertentidad = function(entidad_crear) {
    	consulta = "INSERT INTO entidades(nombres, alias, pastor, celular) VALUES(?, ?, ?, ?) ";
		ConexionServ.query(consulta, [ entidad_crear.nombres, entidad_crear.alias, entidad_crear.pastor, entidad_crear.celular ]).then(function(result) {
          console.log("entidad creada", result);
		  alert("Entidad creada exitosamente");
		  
        }, function(tx) {
          console.log("entidad no se pudo crear", tx);
        }
      );
    };

    $scope.actuentidad = function(entidad_cambiar) {
      consulta =
        "UPDATE  entidades SET nombres=?, alias=?, pastor=?, celular=? WHERE rowid=? ";
      ConexionServ.query(consulta, [
        entidad_cambiar.nombres,
        entidad_cambiar.alias,
        entidad_cambiar.pastor,
        entidad_cambiar.celular,
        entidad_cambiar.rowid
      ]).then(
        function(result) {
          console.log("entidad Actualizada", result);
        },
        function(tx) {
          console.log("entidad no se pudo actualizar", tx);
        }
      );
    };

    $scope.eliminarentidad = function(entidad) {
      consulta = "DELETE FROM entidades WHERE rowid=? ";

      ConexionServ.query(consulta, [entidad.rowid]).then(
        function(result) {
          console.log("entidad eliminida", result);
          $scope.entidades = $filter("filter")($scope.entidades, {
            rowid: "!" + entidad.rowid
          });
        },
        function(tx) {
          console.log("Entidad no se pudo Eliminar", tx);
        }
      );
    };



    


	 	$scope.EliminarDistrito = function(distrito){
	  	
	  	var res = confirm("¿Seguro que desea eliminar ? ");

		if (res == true) {

		 	consulta ="DELETE FROM distritos WHERE rowid=? ";

			ConexionServ.query(consulta,[distrito.rowid]).then(function(result){

				console.log('Distrito  eliminido', result);
				$scope.distritos = $filter('filter') ($scope.distritos, {rowid: '!' + distrito.rowid})
                toastr.success('Distrito eliminado.');
                $scope.focusOnValorNew  = true;
            
                
			} , function(tx){
				console.log('Distrito no se pudo Eliminar' , tx)
			});
		}

     }



     $scope.VerActualizarDistrito = function(distrito){

     	$scope.VerActualizandoDistrito 	= true;

     	$scope.distrito_new_distric 	= distrito;

     	for (var i = 0; i < $scope.usuarios.length; i++) {
     		if (distrito.pastor_id == $scope.usuarios[i].rowid){
     			$scope.distrito_new_distric.pastor = $scope.usuarios[i];
     		}
     		if (distrito.tesorero_id == $scope.usuarios[i].rowid){
     			$scope.distrito_new_distric.tesorero = $scope.usuarios[i];
     		}
     	}


     	$location.hash('editar-distrito');
     	$anchorScroll()

     };




	 $scope.ActualizarDistrito = function(actuali_distrito){
	  
	  console.log(actuali_distrito);
	 consulta ="UPDATE  distritos SET nombre=?, alias=?, zona=? , pastor_id=?, tesorero_id=? WHERE rowid=? "
	   ConexionServ.query(consulta,[actuali_distrito.nombre, actuali_distrito.alias, actuali_distrito.zona, actuali_distrito.pastor_id, actuali_distrito.tesorero_id, actuali_distrito.rowid ]).then(function(result){

           console.log('Pregunta Actualizado', result)
           toastr.success('Distrito Actualizado Exitosamente.')

         		   
   
	   } , function(tx){

	   	console.log('Distrito no se pudo actualizar' , tx)
	   	 toastr.success('Distrito no se pudo actualizar.')

	   });

	 } 
 
	$scope.Cancelar_Actualizar_Distrito = function() {
		$scope.VerActualizandoDistrito = false;
	};
	
	
	
  });
