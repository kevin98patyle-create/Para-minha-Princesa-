function mostrarCarta(){

document.getElementById("carta").style.display="block";

}

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDelay=Math.random()*8+"s";

heart.style.fontSize=(15+Math.random()*20)+"px";

document.body.appendChild(heart);

}

const inicio=new Date("2025-11-01");

function atualizar(){

const hoje=new Date();

const dias=Math.floor((hoje-inicio)/(1000*60*60*24));

document.getElementById("contador").innerHTML=

"❤️ Juntos há "+dias+" dias ❤️";

}

atualizar();