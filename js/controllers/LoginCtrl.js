angular.module('auditoriaApp')


.controller('LoginCtrl', function($scope, $state, ConexionServ, AuthServ){
    
    $scope.user = {}
    
    
    
    $scope.entrar = function(user){
        
        
        AuthServ.loguear(user).then(function(){
            $state.go('panel')
        }, function(){
            alert('Datos incorrectos');
        })
    
        
    }
    
    
    
    ConexionServ.createTables();
	
    $scope.insertar_datos_iniciales = function() {
		
    	consulta = "SELECT * from usuarios ";
   		ConexionServ.query(consulta, []).then(function(result) {
			if (result.length == 0) {
				
				consulta = "INSERT INTO usuarios(nombres, apellidos, username, password, tipo, sexo) VALUES(?,?,?,?,?,?) ";
				ConexionServ.query(consulta, ['JORGE', 'CELEDON', 'jorge',  '123', 'Pastor', 'M']).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				
				ConexionServ.query(consulta, ['JUAN CAMILO', 'MANRRIQUE', 'juan',  '123', 'Tesorero', 'M']).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					
				ConexionServ.query(consulta, ['DANIEL', 'GRANDAS', 'daniel',  '123', 'Pastor', 'M']).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					
				ConexionServ.query(consulta, ['EDILSON', 'MARQUEZ', 'edilson',  '123', 'Tesorero', 'M']).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
					
				ConexionServ.query(consulta, ['FELIX', 'DÍAZ', 'felix',  '123', 'Pastor', 'M']).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				
				
				
				// Distritos
				
				consulta = "INSERT INTO distritos(nombre, alias, codigo, pastor_id) VALUES(?,?,?,?) ";
				
				ConexionServ.query(consulta, ['Arauca Central', 'DSARAUC01', 'DSARAUC01',   1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Arauca Betania', 'DSARABE01', 'DSARABE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Arauquita', 'DSARAUQ01', 'DSARAUQ01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



				ConexionServ.query(consulta, ['Arauquita Maranatha', 'DSARAUQ02', 'DSARAUQ02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Bethel', 'DSBETHE01', 'DSBETHE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Cúcuta Central', 'DSCUCUC01', 'DSCUCUC01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Canaán', 'DSCANAA01', 'DSCANAA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Fortul', 'DSFORTU01', 'DSFORTU01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Juan Atalaya', 'DSJUANA01', 'DSJUANA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Libertad', 'DSLIBER01', 'DSLIBER01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Nuevo Caranal', 'DSCARAN01', 'DSCARAN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Ocaña', 'DSOCAÑA01', 'DSOCAÑA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Palestina', 'DSPALES01', 'DSPALES01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Pamplona', 'DSPAMPL01', 'DSPAMPL01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Patios', 'DSPATIO01', 'DSPATIO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Pueblo Nuevo', 'DSPUEBL01', 'DSPUEBL01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Redención', 'DSREDEN01', 'DSREDEN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer', 'DSRENAC01', 'DSRENAC01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Cubará', 'DSREDCU01', 'DSREDCU01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Saravena Central', 'DSSARAV01', 'DSSARAV01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Tame Central', 'DSTAMEA01', 'DSTAMEA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Tame Oriental', 'DSTAMET01', 'DSTAMET01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Tibú', 'DSTIBUN01', 'DSTIBUN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Cúcuta Sión', 'DSSIONA01', 'DSSIONA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Vichada', 'DSVICHA01', 'DSVICHA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Getsemani', 'DSVILGE01', 'DSVILGE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Villa del Rosario', 'DSVILLA01', 'DSVILLA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Tame Enmanuel', 'DSTAMEE01', 'DSTAMEE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


		

				
				// Iglesias
				
				consulta = "INSERT INTO iglesias(nombre, alias, codigo, distrito_id) VALUES(?,?,?,?) ";
				ConexionServ.query(consulta, ['Alfa y Omega -  Pueblo Nuevo', 'CALFAY01', 'CALFAY01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Alfa y Omega -  Redencion', 'CALFAY02', 'CALFAY02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Alfa y Omega - Tame Central', 'CALFAY03', 'CALFAY03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Alfa y Omega - Tame Central', 'CALFAY03', 'CALFAY03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Alfa y Omega - D. Atalaya', 'CALFAY04', 'CALFAY04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Alfa y Omega - Arauquita Central', 'CALFAY05', 'CALFAY05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



				ConexionServ.query(consulta, ['Arauca -  Arauca Central', 'CARAUC01', 'CARAUC01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Arauquita -  Arauquita', 'CARAUQ01', 'CARAUQ01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Bendición- Reiner -  Arauquita -  Arauquita', 'CBENDI01', 'CBENDI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Berea -  Vichada', 'CBEREA01', 'CBEREA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				


				ConexionServ.query(consulta, ['Betania Malvinas -  Nuevo Caranal', 'CBETAN01', 'CBETAN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Betania -  Arauca Betania', 'CBETAN02', 'CBETAN02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Betania -  Cubará', 'CBETAN03', 'CBETAN03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Betenia -  Juan Atalaya', 'CBETAN04', 'CBETAN04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Betania - D. Fortul', 'CBETAN05', 'CBETAN05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				

				ConexionServ.query(consulta, ['Betania - Palestina', 'CBETAN06', 'CBETAN06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Bethel -  Bethel', 'CBETHE01', 'CBETHE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



				ConexionServ.query(consulta, ['Bethel -  Cucuta Sión', 'CBETHE02', 'CBETHE02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Bethel - Abrego D. Ocaña', 'CBETHE03', 'CBETHE03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Brasilia -  Arauquita Maranatha', 'CBRASI01', 'CBRASI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Buenos Aires -  Pueblo Nuevo', 'CBUENO01', 'CBUENO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['El Buen Pastor -  Pueblo Nuevo', 'CBUENP01', 'CBUENP01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



				ConexionServ.query(consulta, ['Cabssel -  D. Tibú', 'CCABSS01', 'CCABSS01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Caled -  Juan Atalaya', 'CCALED01', 'CCALED01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Caleb - Caranal', 'CCALEB01', 'CCALEB01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Canaan -  Saravena Bethel', 'CCANAA01', 'CCANAA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Canaan -  Cubará', 'CCANAA02', 'CCANAA02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Canaan -  D. Patios', 'CCANAA03', 'CCANAA03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



				ConexionServ.query(consulta, ['Canaan -  D. Canaan', 'CCANAA04', 'CCANAA04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Canaan - D. Tame Central', 'CCANAA05', 'CCANAA05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Canaan - D. Ocaña', 'CCANAA06', 'CCANAA06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Caño Cristal -  Fortul', 'CCAÑOC01', 'CCAÑOC01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Central de Cúcuta -  Cucuta Central', 'CCENTR01', 'CCENTR01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Casa de Oración - D. Renacer', 'CCASAO01', 'CCASAO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Costa Hermosa -  Arauca Betania', 'CCOSTA01', 'CCOSTA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Cravonorte -  Arauca Betania', 'CCRAVO01', 'CCRAVO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Cristo la Esperanza -  Getsemani', 'CCRIST01', 'CCRIST01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Cristo Redentor - Patios', 'CCRIRE01', 'CCRIRE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Ebenezer -  Tame Central', 'CEBENE01', 'CEBENE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Ebenezer-Oasis -  Arauquita Maranatha', 'CEBENE02', 'CEBENE02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Ebenezer -  Palestina', 'CEBENE03', 'CEBENE03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Ebenezer -  Redencion', 'CEBENE04', 'CEBENE04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				

				ConexionServ.query(consulta, ['Ebenezer Chitaga - D Pamplona', 'CEBENE05', 'CEBENE05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Eden -  Arauquita Maranatha', 'CEDENI01', 'CEDENI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Eden -  Saravena Central', 'CEDENI02', 'CEDENI02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Eden -  Villa Del Rosario', 'CEDENI03', 'CEDENI03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Eden -  Ocaña', 'CEDENI04', 'CEDENI04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Eden Brisas - Tame Central', 'CEDENT01', 'CEDENT01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Efeso -  Tame Oriental', 'CEFESO01', 'CEFESO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Emaus -  Pamplona', 'CEMAUS01', 'CEMAUS01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Emaus -  Patios', 'CEMAUS02', 'CEMAUS02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Emaus -  D. Cubará', 'CEMAUS03', 'CEMAUS03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Emaus - D. Bethel', 'CEMAUS04', 'CEMAUS04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Embajadores - Cúcuta Central', 'CEMBAJ01', 'CEMBAJ01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Enacore - Tame central', 'CENACO01', 'CENACO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Enmanuel -  Tame Enmanuel', 'CENMAN01', 'CENMAN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Enmanuel-Pesquera -  Arauquita', 'CENMAN02', 'CENMAN02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Enmanuel -  Redencion', 'CENMAN03', 'CENMAN03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Enmanuel -  Juan Atalaya', 'CENMAN04', 'CENMAN04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Enmanuel - Arauquita  Maranatha', 'CENMAN06', 'CENMAN06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Enmanuel - Pueblo Nuevo', 'CENMAN07', 'CENMAN07',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Esmirna - Tame Oriental', 'CESMIR01', 'CESMIR01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Estrella del Amanecer -  Cucuta Central', 'CESTRE01', 'CESTRE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Estrella de Jacob - Arauca Central', 'CESTRE02', 'CESTRE02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



				ConexionServ.query(consulta, ['Filadelfia -  Cubará', 'CFILAD02', 'CFILAD02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Filadelfia -  D. Patios', 'CFILAD03', 'CFILAD03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



				ConexionServ.query(consulta, ['Filadelfia -  Juan Atalaya', 'CFILAD04', 'CFILAD04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Filadefia -  Ocaña', 'CFILAD05', 'CFILAD05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Filadelfia - Redención', 'CFILAD06', 'CFILAD06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Fortul -  Fortul', 'CFORTU01', 'CFORTU01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Fuerte Pregon -  Villa Del Rosario', 'CFUERT01', 'CFUERT01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Galaad -  Patios', 'CGALAA01', 'CGALAA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Galilea -  Pamplona', 'CGALIL01', 'CGALIL01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Genezareth -  Bethel', 'CGENEZ01', 'CGENEZ01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Genezareth -  Villa Del Rosario', 'CGENEZ02', 'CGENEZ02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Gerisim - Villa del Rosario', 'CGERIS01', 'CGERIS01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Gerizin - Palestina', 'CGERIZ01', 'CGERIZ01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Getsemany -  Nuevo Caranal', 'CGETSE01', 'CGETSE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Getsemany -  Bethel', 'CGETSE02', 'CGETSE02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Getsemany -  Cubará', 'CGETSE03', 'CGETSE03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Getsemani -  Getsemani', 'CGETSE04', 'CGETSE04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Getsemany -  Juan Atalaya', 'CGETSE05', 'CGETSE05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Getsemani - Ocaña', 'CGETSE06', 'CGETSE06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Genezaret - Atalaya', 'CGENEZ03', 'CGENEZ03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Glondrinas -  Palestina', 'CGLOND01', 'CGLOND01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Gran Faro Toledo - Pamplona', 'CGRAFA01', 'CGRAFA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Hashen-Peralonso -  Arauquita Maranatha', 'CHASHE01', 'CHASHE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Heraldo -  Bethel', 'CHERAL0', 'CHERAL0',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Hebron - Tame Central', 'CHEBRO01', 'CHEBRO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Hebron - Bethel', 'CHEBRO02', 'CHEBRO02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Horeb, La Hermosa -  Oriental', 'CHOREB01', 'CHOREB01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Horeb- San Luis -  Arauquita Maranatha', 'CHOREB02', 'CHOREB02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Horeb -  Saravena Bethel', 'CHOREB03', 'CHOREB03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Horeb -  Patios', 'CHOREB04', 'CHOREB04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Gr. Horeb - D. Libertad', 'CHOREB05', 'CHOREB05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Grupo Horeb - Cubará', 'CHOREB06', 'CHOREB06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Horeb - Palestina', 'CHOREB08', 'CHOREB08',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jehova Jireth - Vichada', 'CJEHOV01', 'CJEHOV01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Jerico -  D. Renacer', 'CJERIC01', 'CJERIC01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jerusalen -  Tame Central', 'CJERUS01', 'CJERUS01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Jerusalen -  Palestina', 'CJERUS02', 'CJERUS02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jerusalen -  Cucuta Sión', 'CJERUS03', 'CJERUS03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jerusalen - Pueblo Nuevo', 'CJERUS06', 'CJERUS06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jerusalen -  Patios', 'CJERUS04', 'CJERUS04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jerusalen Holanda - Tame Central', 'CJERHO01', 'CJERHO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Jezreel - Libertad', 'CJEZRE01', 'CJEZRE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jerusalen - Cubará', 'CJERUS07', 'CJERUS07',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jireh - Arauquita', 'CJIREH01', 'CJIREH01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['La Esperanza - Getsemani', 'CJESUS05', 'CJESUS05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jehova Nisi - D. Pueblo Nuevo', 'CJOHOV01', 'CJOHOV01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Jordan -  Pueblo Nuevo', 'CJORDA01', 'CJORDA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['La Roca -  Libertad', 'CLAROC01', 'CLAROC01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Legado -  Cucuta Sión', 'CLEGAD01', 'CLEGAD01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['La Hermosa - Fortul', 'CLAHER01', 'CLAHER01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['La Hermosa - Cúcuta Sión', 'CLAHER02', 'CLAHER02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Mahanain -  Arauquita Maranatha', 'CMAHAN01', 'CMAHAN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Mahanain -  Cubará', 'CMAHAN02', 'CMAHAN02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Mahanain -  Pamplona', 'CMAHAN03', 'CMAHAN03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Manantial - D. Cubará', 'CMANAN02', 'CMANAN02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Maranatha -  Arauquita Maranatha', 'CMARAN01', 'CMARAN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Maranatha -  Palestina', 'CMARAN02', 'CMARAN02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Maranatha -  Juan Atalaya', 'CMARAN03', 'CMARAN03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Maranatha -  Vichada', 'CMARAN04', 'CMARAN04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Maranatha -  Ocaña', 'CMARAN05', 'CMARAN05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Orion - Tame Oriental', 'CMARAN06', 'CMARAN06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Maranatha - Arauca Betenia', 'CMARAN07', 'CMARAN07',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Mies -  Nuevo Caranal', 'CMIESI01', 'CMIESI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Monte de los Olivos -  Palestina', 'CMONTE01', 'CMONTE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Monte Carmelo -  Cubará', 'CMONTE02', 'CMONTE02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Monte Alto -  D. Tibú', 'CMONTE03', 'CMONTE03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Moriach - Pueblo Nuevo', 'CMORIA01', 'CMORIA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Nueva Jerusalen  -  Pamplona', 'CNUEVA01', 'CNUEVA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Nueva Jerusalen -  Getsemani ', 'CNUEVA02', 'CNUEVA02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Nueva Jerusalen - Atalaya ', 'CNUEJE01', 'CNUEJE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Nueva Esperanza -  Libertad ', 'CNUEVA03', 'CNUEVA03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Nueva Galilea - Cúcuta Sión ', 'CNVAGA01', 'CNVAGA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Nueva Esperanza - Ocaña ', 'CNUEVA04', 'CNUEVA04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Nuevo Eden -  Nuevo Caranal ', 'CNUEVO01', 'CNUEVO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Ocaña -  Ocaña ', 'COCAÑA01', 'COCAÑA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Olivares -  Pueblo Nuevo ', 'COLIVA01', 'COLIVA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Orión -  Fortul ', 'CORION01', 'CORION01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Orion -  Cúbará ', 'CORION02', 'CORION02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Ovejas -  Libertad ', 'COVEJA01', 'COVEJA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Paraiso Pachelly -  D. Tibú ', 'CPACHE01', 'CPACHE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Palestina -  Palestina ', 'CPALES01', 'CPALES01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Palestina -  Libertad ', 'CPALES02', 'CPALES02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Paraiso -  Arauca Betania', 'CPARAI01', 'CPARAI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Paraiso -  Palestina', 'CPARAI02', 'CPARAI02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Paraiso Bochalema -  Patios', 'CPARAI03', 'CPARAI03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Paraiso -  Getsemani', 'CPARAI04', 'CPARAI04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Paraiso - D. Bethel', 'CPARAI05', 'CPARAI05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Peniel -  Bethel', 'CPENIE01', 'CPENIE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Peniel -  Cúbará', 'CPENIE02', 'CPENIE02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Peniel -  Libertad', 'CPENIE03', 'CPENIE03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Peniel Simon - Pamplona', 'CPENIEL04', 'CPENIEL04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Peniel - Arauquita central', 'CPENIE05', 'CPENIE05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Peniel - Tame Oriental', 'CPENIE06', 'CPENIE06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Puerto Rico - Redencion', 'CPTORI01', 'CPTORI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

					ConexionServ.query(consulta, ['Puerto Rondon -  Tame Central', 'CPUERT01', 'CPUERT01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				
				ConexionServ.query(consulta, ['Ragonvalia - Villa del Rosario', 'CRAGON01', 'CRAGON01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Redención -  Redencion', 'CREDEN01', 'CREDEN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Redención -  Ocaña', 'CREDEN02', 'CREDEN02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Redención - Cúcuta Sión', 'CREDEN03', 'CREDEN03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Refugio -  D. Atalaya', 'CREFUG01', 'CREFUG01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Remanente -  Nuevo Caranal', 'CREMAN01', 'CREMAN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Filial Remanente - D. Arauquita', 'CREMAN02', 'CREMAN02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer-Maporita -  Arauquita', 'CRENAC01', 'CRENAC01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer -  Redención', 'CRENAC02', 'CRENAC02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer -  D. Renacer', 'CRENAC03', 'CRENAC03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer -  Vichada', 'CRENAC04', 'CRENAC04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer -  Ocaña', 'CRENAC05', 'CRENAC05',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer - Nuevo Caranal', 'CRENAC07', 'CRENAC07',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer - Tame Oriental', 'CRENAC06', 'CRENAC06',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer - D. Arauca Central', 'CRENAC08', 'CRENAC08',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer - D. Libertad', 'CRENAC09', 'CRENAC09',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer - Saravena Central', 'CRENAC10', 'CRENAC10',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Renacer - Arauquita Maranatha', 'CRENAC011', 'CRENAC011',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Salen -  Tame Oriental', 'CSALEN01', 'CSALEN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Sama -  Nuevo Caranal', 'CSAMAI01', 'CSAMAI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Siloe -  Pamplona', 'CSAMAR01', 'CSAMAR01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Samaritana -  Ocaña', 'CSAMAR02', 'CSAMAR02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Horeb - San francisco  - D. Nuevo Caranal', 'CHOREB07', 'CHOREB07',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Saravena Central -  Saravena Central', 'CSARAV01', 'CSARAV01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Salvación -  Ocaña', 'CSALVA01', 'CSALVA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Sardis - D. Sión', 'CZARDI01', 'CZARDI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sarón -  Arauca Central', 'CSARON01', 'CSARON01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Saron -  Palestina', 'CSARON02', 'CSARON02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Saron -  Bethel', 'CSARON03', 'CSARON03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sarón - Pamplona', 'CSARON04', 'CSARON04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Shaday - Bethel', 'CSHADA01', 'CSHADA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Shalon, Panama -  Pueblo Nuevo', 'CSHALO01', 'CSHALO01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Senderos - Villa del Rosario', 'CSENDE01', 'CSENDE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Shalon -  Bethel', 'CSHALO02', 'CSHALO02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});



				ConexionServ.query(consulta, ['Valle de Sarón - D. Cucuta Central', 'CSHALO03', 'CSHALO03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Siloe -  Tame Central', 'CSILOE01', 'CSILOE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Siloe -  Arauquita Maranatha', 'CSILOE02', 'CSILOE02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Siloe -  Bethel', 'CSILOE03', 'CSILOE03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Siloe - Ocaña', 'CSILOE04', 'CSILOE04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sinai -  Cubará', 'CSINAI01', 'CSINAI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sinai -  Patios', 'CSINAI02', 'CSINAI02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sinai - D. Pueblo Nuevo', 'CSINAI03', 'CSINAI03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sinai - Vichada', 'CSINAI04', 'CSINAI04',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Grupo Sion - Cubará', 'CSIONG01', 'CSIONG01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sion -  Bethel', 'CSIONI01', 'CSIONI01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sion -  Cucuta Sión', 'CSIONI02', 'CSIONI02',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Sión -  Ocaña', 'CSIONI03', 'CSIONI03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Smirna -  Cucuta Central', 'CSMIRN01', 'CSMIRN01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Soledad -  D. Tibú', 'CSOLED01', 'CSOLED01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Sucot  -  Fortul', 'CSUCOT01', 'CSUCOT01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['El Caucho - D. Arauquita', 'CCAUCH01', 'CCAUCH01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Amanecer - Nuevo Caranal', 'CAMANE01', 'CAMANE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});


				ConexionServ.query(consulta, ['Grupo Tabiro - D. Cúcuta Central', 'CTABIR01', 'CTABIR01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Grupo Torcoroma 3 - D. Libertad', 'CTORCO03', 'CTORCO03',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Tres Angeles -  Villa Del Rosario', 'CTRESA01', 'CTRESA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['El Vergel -  Pueblo Nuevo', 'CVERGE01', 'CVERGE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Villa de Emaus -  Tame Central', 'CVILLA01', 'CVILLA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				
				ConexionServ.query(consulta, ['Voz de Salvación -  Palestina', 'CVOZDE01', 'CVOZDE01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

				ConexionServ.query(consulta, ['Zulia  -  D. Atalaya', 'CZULIA01', 'CZULIA01',  1]).then(function(result) {
		
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});

		
				
				
				


				
				// AUDITORIAS
				consulta = "INSERT INTO auditorias(fecha, hora, iglesia_id) VALUES(?,?,?) ";
				ConexionServ.query(consulta, ['01/01/2015', '10:10:00am', 1]).then(function(result) {
					console.log('Audi prueba insertada');
				}, function(tx) {
					console.log("Dato original no insertado", tx);
				});
				
				
			}
			
        }, function(tx) {
          console.log("", tx);
		});
		
	};
	
	$scope.insertar_datos_iniciales();
	
	
    
})