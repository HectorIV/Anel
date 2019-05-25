function loadImages(){
    var imagenes = [1,2,3,4,18,6,7,8,9,10,11,12,13,14,15,16,17,5,19,20,21,22];
    var galeria = document.getElementById('galeria');


    for(imagen of imagenes){
        galeria.innerHTML += `
        <a href="#" onclick="openModal(${imagen})" data-toggle="modal" data-target="#id${imagen}">
                <figure class="figure">
                    <img src="./images/FotosSitioWeb/${imagen}.jpg" width="" height=""
                        class="figure-img img-fluid rounded shadow" alt="imagenes">

                </figure>
        </a>
        `
    }
}

function openModal(val){
    $("#modal1").modal("show");
    $("#cuerpom").html('<img src="./images/FotosSitioWeb/'+val+'.jpg" class="img-fluid">');
}