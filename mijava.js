


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
        



