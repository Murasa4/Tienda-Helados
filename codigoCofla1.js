let dineroCofla = prompt("Cuanto Dinero tiene Cofla?");
let dineroPedro = prompt("Cuanto Dinero tiene Pedro?");
let dineroRoberto = prompt("Cuanto Dinero tiene Roberto?");

dineroCofla = parseInt(dineroCofla); // lo convertimos en numero


//compra Cofla
if(dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate un helado de agua");
    alert("y te sobran: " + (dineroCofla - 0.6));
} 
else if(dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Comprate uno de crema");
    alert("y te sobran: " + (dineroCofla - 1));
} 
else if(dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Comprate uno de Heladix");
    alert("y te sobran: " + (dineroCofla - 1.6));
} 
else if(dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Comprate uno de heladovich");
    alert("y te sobran: " + (dineroCofla - 1.7));
} 
else if(dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Comprate uno de helardo");
    alert("y te sobran: " + (dineroCofla - 1.8));
} 
else if(dineroCofla >= 2.9) {
    alert("Podes comprarte un Helado de confites o un Pote de 1/4 kg");
    alert("y te sobran: " + (dineroCofla - 2.9));
} 
else {
    alert("no te alcanza para ningun helado")
};

// compra de Pedro
if(dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Comprate un helado de agua");
} else if(dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Comprate uno de crema");
} else if(dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Comprate uno de Heladix");
} else if(dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Comprate uno de heladovich");
} else if(dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Comprate uno de helardo");
} else if(dineroPedro >= 2.9) {
    alert("Podes comprarte un Helado de confites o un Pote de 1/4 kg");
} else {
    alert("no te alcanza para ningun helado")
};

//compra Roberto
if(dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Comprate un helado de agua");
} else if(dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Comprate uno de crema");
} else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Comprate uno de Heladix");
} else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Comprate uno de heladovich");
} else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Comprate uno de helardo");
} else if(dineroRoberto >= 2.9) {
    alert("Podes comprarte un Helado de confites o un Pote de 1/4 kg");
} else {
    alert("no te alcanza para ningun helado")
};