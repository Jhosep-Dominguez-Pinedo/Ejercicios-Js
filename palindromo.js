<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin t&iacute;tulo</title>
<script src="https://code.jquery.com/jquery-1.3.2.min.js"></script>
</head>
<body>
<span>La fecha de hoy es : </span><br>
<span>La hora actual es : </span><br>
<div id='perro'></div><br>
<span>La fecha es hoy  : <label>penelope<label></span>
<body>
</body>
<script type="text/javascript">
$("document").ready(function(){
	var cadena = "Alli por la tropa portado traido a ese paraje de maniobras una tipa como capitan usar boina me dejara pese a odiar toda tropa por tal ropilla";
	var cade_minuscula = cadena.toLowerCase();
	var arreglo = cade_minuscula.split(" ");//cortalo por espacios
	var unir = arreglo.join(""); //unelos
	var separar = unir.split("");//va leer esto donde cada letra es un valo de un arreglo
	var reversa = [];
	var i;
	var letra;
	var cantidad = unir.length;
	cantidad-=1;
	for(i=cantidad;i>=0;i--){
		letra = separar[i];
		reversa.push(letra);
	}
	var unir2 = reversa.join(""); //unelos
	var unir3 = separar.join(""); //unelos
	if(unir2==unir3){
		alert("Si es palindromo");
	}
	else{
		alert("No es palindromo");
	}
	console.log(unir2);
	console.log(unir3);
})
</script>
</html>
