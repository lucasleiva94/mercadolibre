
var fecha = new Date();

var fecha_hora = fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes()+ ":" + fecha.getSeconds() ;


function generarTexto(data,cate) {
  var texto = [];





for ( let i= 0; i< data.results.length; i++){

  texto.push("id: ");
  texto.push(data.results[i].id);
  texto.push("title ");
  texto.push(data.results[i].title);
  texto.push("category_id: ");
  texto.push(data.results[i].category_id);
  texto.push("categoria: ");
  texto.push(cate);

  texto.push("\r");

}


guardasion(texto)


  return new Blob(texto, {
    type: 'text/plain'

  });
  
};



function guardasion(texto){


var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function () {
        var blob = new File([texto], "log con fecha "+fecha_hora);
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = blob.name;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
saveData()
}






     function capturar() {



      var id_vendedor = document.getElementById("id_usuario").value;

       // var id_vendedor = document.getElementsByTagName("input")[0].value;

       //console.log(id_vendedor)

       traer2(id_vendedor)






     }


function traer2(id_vendedor){



fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id='+id_vendedor)

         



       .then (res => res.json())
       .then (data => {




		for ( let i= 0; i< data.results.length; i++){
	     

	    
		

		var datos = data.results[i]
    
		

      //console.log (datos.category_id)
   

       fetch('https://api.mercadolibre.com/sites/MLA/search?category='+datos.category_id)
       .then (res => res.json())
       .then (cat => {



		var cate = cat.filters[0].values[0].name

       //console.log(cate)
        

   generarTexto(data,cate);  
      
		tabla(data.results[i],cate)



     
})

}

          })




}







		
      var contenido = document.querySelector('#contendio') 

      function traer(id_vendedor){

     
   fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326')

         



       .then (res => res.json())
       .then (data => {


        



		for ( let i= 0; i< data.results.length; i++){







	    
		    var datos = data.results[i]



        



		

      //console.log (datos.category_id)
   

       fetch('https://api.mercadolibre.com/sites/MLA/search?category='+datos.category_id)
       .then (res => res.json())
       .then (cat => {





		var cate = cat.filters[0].values[0].name

generarTexto(data,cate);



       //console.log(cate)





        
		tabla(data.results[i],cate)




     
})

}

          })

   



          


      }
        function tabla(datos,cate) {

             //console.log(datos.title)


                             contenido_tabla.innerHTML += `
                
                <tr>
                    <th scope="row">${ datos.id }</th>
                    <th scope="row">${ datos.title }</th>
                    <th scope="row">${ datos.category_id }</th>
                    <th scope="row">${ cate }</th>
                     

                </tr>

`






   }








        

