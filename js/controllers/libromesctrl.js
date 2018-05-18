angular.module("auditoriaApp")

.controller("LibroMesCtrl", function($scope, ConexionServ, $filter, $uibModal, toastr) {

	$scope.entidades 		= true;
    $scope.distrito_new 	= {};
		$scope.modentidades 	= false;
		$scope.verCrearDistrito = false;
		$scope.usuarios 		= [];
	
		$scope.meses = [
			{num: 0, mes: 'Enero'},
			{num: 1, mes: 'Febrero'},
			{num: 3, mes: 'Marzo'},
            {num: 4, mes: 'Abril'},
            {num: 5, mes: 'Mayo'},
            {num: 6, mes: 'Junio'},
            {num: 7, mes: 'Julio'},
            {num: 8, mes: 'Agosto'},
            {num: 9, mes: 'Septiembre'},
            {num: 10, mes: 'Octubre'},
            {num: 11, mes: 'Noviembre'},
            {num: 12, mes: 'Diciembre'}

		];

		$scope.years = [
			{year: 2017},
			{year: 2018},
			{year: 2019},
			{year: 2020},
			{year: 2021},
			{year: 2022},
			{year: 2023},
			{year: 2024},
			{year: 2025},
			{year: 2026},
			{year: 2027},
			{year: 2028},
			{year: 2029},
			{year: 2030}
		];
		
		$scope.gridOptions = {
			enableSorting: true,
			enableFiltering: true,
			columnDefs: [
				{ field: 'nombre' },
				{ field: 'alias' },
				{ field: 'celular' },
				{ field: 'tesorero_nombres' }
			],
			onRegisterApi: function( gridApi ) {
				$scope.grid1Api = gridApi;
			}
		};
		
	



	$scope.abrirLibroSemanal = function(libro_mes) {


	    var modalInstance = $uibModal.open({
	        templateUrl: 'templates/libros/libroSemanalModal.html',
	        resolve: {
		        libro_mes: function () {
		        	return libro_mes;
		        }
		    },
	        controller: function ($uibModalInstance, $scope, libro_mes, ConexionServ) {
	        	$scope.libro_mes = libro_mes;
	        	$scope.libro = {
	        		sem1_diezmo: 0,
	        		sem1_ofrenda: 0,
	        		sem1_especial: 0,

	        		sem2_diezmo: 0,
	        		sem2_ofrenda: 0,
	        		sem2_especial: 0,

	        		sem3_diezmo: 0,
	        		sem3_ofrenda: 0,
	        		sem3_especial: 0,

	        		sem4_diezmo: 0,
	        		sem4_ofrenda: 0,
	        		sem4_especial: 0,

	        		sem5_diezmo: 0,
	        		sem5_ofrenda: 0,
	        		sem5_especial: 0
	        	};


				$scope.ok = function () {

				    $uibModalInstance.close('Cerrado');
				};

				$scope.cancel = function () {
				    $uibModalInstance.dismiss('cancel');
				};

	        	return ;
	        }
	    });

	    modalInstance.result.then(function (result) {
	        console.log(result);
	    });


	}



	$scope.cambiaValor = function(libro, columna) {

		consulta 	= 'UPDATE lib_mensuales SET ' + columna + '=? WHERE rowid=?';
		colum 		= columna.charAt(0).toUpperCase() + columna.slice(1);
		
		ConexionServ.query(consulta, [libro[columna], libro.rowid]).then(function(){
			toastr.success(colum + ' guardado');
		}, function(){
			toastr.error(colum + ' NO guardado');
		});

	}



  $scope.crear_libronuevo = function(libro_new) {

  		if (libro_new.mes.length > 1) {
  			alert('Solo puedes seleccionar un mes.');
  			return;
  		}
  		if (libro_new.year.length > 1) {
  			alert('Solo puedes seleccionar un año.');
  			return;
  		}

  		year_temp 	= libro_new.year[0];
  		mes_temp 	= libro_new.mes[0];

		consulta 	= 'INSERT INTO lib_mensuales(year, mes, auditoria_id, diezmos, ofrendas, especiales, remesa_enviada) VALUES(?,?,?,?,?,?,?)';
		
		ConexionServ.query(consulta, [year_temp, mes_temp, $scope.USER.auditoria_id,0,0,0,0]).then(function(result) {
			$scope.traerDatos();
		}, function(tx) {
			console.log("Error no es posbile crear mes", tx);
		});
	};
    $scope.cancelar_crear_distrito = function() {
		$scope.distrito_new 	= {};
		$scope.verCrearDistrito = false;
	};
	
	

	$scope.traerDatos = function(){

		consulta 	= 'SELECT m.*, m.rowid FROM lib_mensuales m';
		
		ConexionServ.query(consulta, []).then(function(result) {
			$scope.lib_meses = result;
		}, function(tx) {
			console.log("Error no es posbile crear mes", tx);
		});


	}



	
   $scope.traerDatos();

   	 $scope.EliminarLibroMensul = function(lib_mensualesEliminate){
	  	
	 	consulta ="DELETE FROM lib_mensuales WHERE rowid=? ";

	   ConexionServ.query(consulta,[lib_mensualesEliminate.rowid]).then(function(result){


           console.log('Libro mes eliminido', result);
           $scope.lib_mensualesEliminates = $filter('filter') ($scope.lib_mensualesEliminates, {rowid: '!' + lib_mensualesEliminate.rowid})
	   } , function(tx){

	   	console.log('Libro mes no se pudo Eliminar' , tx)

	   });

	 }
	 
	 $scope.InsertarMesAño = function(){
   
	};

	
	
  });
