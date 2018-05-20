angular.module("auditoriaApp")

.controller("LibroMesCtrl", function($scope, ConexionServ, $filter, $uibModal, toastr) {

	$scope.entidades 		= true;
    $scope.distrito_new 	= {};
		$scope.modentidades 	= false;
		$scope.verCrearDistrito = false;
		$scope.usuarios 		= [];
		$scope.verCrearLibroMensual = false;
		
	
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
	        	$scope.libro = libro_mes;


				$scope.ok = function () {
				    $uibModalInstance.close('Cerrado');
				};


				$scope.cambiaValor = function(libro, columna, colum_mes) {

					consulta 	= 'UPDATE lib_semanales SET ' + columna + '=? WHERE rowid=?';
					colum 		= columna.charAt(0).toUpperCase() + columna.slice(1);
					
					ConexionServ.query(consulta, [libro[columna], libro.rowid]).then(function(){

						consulta 	= 'UPDATE lib_mensuales SET ' + colum_mes + '=? WHERE rowid=?';
						total 		= 0;

						if (colum_mes == 'diezmos') {
							total 		= libro.diezmo_1 + libro.diezmo_2 + libro.diezmo_3 + libro.diezmo_4 + libro.diezmo_5;
						}
						if (colum_mes == 'ofrendas') {
							total 		= libro.ofrenda_1 + libro.ofrenda_2 + libro.ofrenda_3 + libro.ofrenda_4 + libro.ofrenda_5;
						}
						if (colum_mes == 'especiales') {
							total 		= libro.especial_1 + libro.especial_2 + libro.especial_3 + libro.especial_4 + libro.especial_5;
						}
						console.log(total, libro);
						
						ConexionServ.query(consulta, [total, libro.rowid]).then(function(){
							toastr.success(colum + ' guardado');
						}, function(){
							toastr.error(colum + ' NO guardado');
						});

					}, function(){
						toastr.error(colum + ' NO guardado');
					});

				}

	        	return ;
	        }
	    });

	    modalInstance.result.then(function (result) {
	    	$scope.traerDatos();
	        console.log(result);
	    }, function(r2){
	    	$scope.traerDatos();
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
  			toastr.warning('Solo puedes seleccionar un mes.');
  			return;
  		}
  		if (libro_new.year == undefined) {
  			toastr.warning('Seleccione el año.');
  			return;
  		}
  		if (libro_new.year.length > 1) {
  			toastr.warning('Solo puedes seleccionar un año.');
  			return;
  		}

  	

  		year_temp 	= libro_new.year[0];
  		mes_temp 	= libro_new.mes[0];

  		// Movemos al siguiente mes
  		if (mes_temp=='Enero') {libro_new.mes[0] = 'Febrero'}else if(mes_temp=='Febrero'){libro_new.mes[0] = 'Marzo'}else if(mes_temp=='Marzo'){libro_new.mes[0] = 'Abril'}else if(mes_temp=='Abril'){libro_new.mes[0] = 'Mayo'}else if(mes_temp=='Mayo'){libro_new.mes[0] = 'Junio'}else if(mes_temp=='Junio'){libro_new.mes[0] = 'Julio'}
  			else if(mes_temp=='Julio'){libro_new.mes[0] = 'Agosto'}else if(mes_temp=='Agosto'){libro_new.mes[0] = 'Septiembre'}else if(mes_temp=='Septiembre'){libro_new.mes[0] = 'Octubre'}else if(mes_temp=='Octubre'){libro_new.mes[0] = 'Noviembre'}else if(mes_temp=='Noviembre'){libro_new.mes[0] = 'Diciembre'}else if(mes_temp=='Diciembre'){libro_new.mes[0] = 'Enero'};


		consulta 	= 'INSERT INTO lib_mensuales(year, mes, auditoria_id, diezmos, ofrendas, especiales, remesa_enviada) VALUES(?,?,?,?,?,?,?)';
		
		ConexionServ.query(consulta, [year_temp, mes_temp, $scope.USER.auditoria_id,0,0,0,0]).then(function(result) {

			consulta 	= 'INSERT INTO lib_semanales(libro_mes_id) VALUES(?)';
			ConexionServ.query(consulta, [result.insertId]).then(function(result) {
				$scope.traerDatos();
			});
		}, function(tx) {
			console.log("Error no es posbile crear mes", tx);
		});
	};
    $scope.cancelar_crear_distrito = function() {
		$scope.distrito_new 	= {};
		$scope.verCrearDistrito = false;
	};
	
	

	$scope.traerDatos = function(){

		$scope.lib_meses = [];

		consulta 	= 'SELECT m.*, m.rowid, s.*, s.rowid FROM lib_mensuales m ' + 
						'INNER JOIN lib_semanales s ON m.rowid=s.libro_mes_id';
		
		ConexionServ.query(consulta, []).then(function(result) {
			$scope.lib_meses = result;
		}, function(tx) {
			console.log("Error no es posbile crear mes", tx);
		});


	}



	
	$scope.traerDatos();

   	$scope.EliminarLibroMensul = function(lib_mens){
	  	
	  	var res = confirm("¿Seguro que desea eliminar?");

		if (res == true) {

		 	consulta ="DELETE FROM lib_mensuales WHERE rowid=? ";

			ConexionServ.query(consulta,[lib_mens.rowid]).then(function(result){

				console.log('Libro mes eliminido', result);
				$scope.lib_meses = $filter('filter') ($scope.lib_meses, {rowid: '!' + lib_mens.rowid})
				toastr.success('Mes eliminado.');

			} , function(tx){
				console.log('Libro mes no se pudo Eliminar' , tx)
			});
		}
	}
	 

	
	
});
