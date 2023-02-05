
const pokemonContainer=document.querySelector(".pokemon-container");
function fetchPokemon(){
  let url=`https://pokeapi.co/api/v2/pokemon/`;
let random = Math.round(Math.random()*1008);
let urlDef= url + random;
  fetch(urlDef)
  .then(res=>res.json())
  .then(pokemon=>

    createPokemon(pokemon)
 

    )
}


function fetchPokemons(){
  let values =+prompt("Introduce numero pokemons");
  for(let i=1;i<=values; i++){
      fetchPokemon(i);
  }
}


function display(id){
  
let url3=`https://pokeapi.co/api/v2/pokemon/${id}/`;

  fetch(url3)
  .then(res3=>res3.json())
  .then(pokemon=>

    createPokemon3(pokemon)
 
    )
}

function createPokemon3(pokemon){
  document.getElementById('cards3').innerHTML = '';


  let modal = document.getElementById("cards3");
  modal.style.display = "block";

const out =document.querySelector("#cards3");
const temp=document.getElementById("template3");
const clonedTemplate=temp.content.cloneNode(true);


let card=clonedTemplate.querySelector(".card3");
let sprite=clonedTemplate.querySelector("img");
let number=clonedTemplate.querySelector(".numero3");
let name=clonedTemplate.querySelector(".name3");
let attack=clonedTemplate.querySelector(".attack3");
let defense=clonedTemplate.querySelector(".defense3");
let noInfo=clonedTemplate.querySelector(".close");

card.setAttribute("id", `#${pokemon.id.toString().padStart(3,0)}` );
sprite.setAttribute("src", pokemon.sprites.front_default );
number.textContent=`Número pokedex: #${pokemon.id.toString().padStart(3,0)}`;
name.textContent=`Nombre: ${pokemon.name}`;
attack.textContent=`Ataque físico: ${pokemon.stats[1].base_stat}`;
defense.textContent=`Defensa física: ${pokemon.stats[2].base_stat}`;
noInfo.setAttribute("id", pokemon.id );


noInfo.textContent="Cerrar";


out.appendChild(clonedTemplate);

}

function createPokemon(pokemon){
const out =document.querySelector("#cards1");
const temp=document.getElementById("template");
const clonedTemplate=temp.content.cloneNode(true);


let card=clonedTemplate.querySelector(".card");
let sprite=clonedTemplate.querySelector("img");
let number=clonedTemplate.querySelector(".numero");
let name=clonedTemplate.querySelector(".name");
let showInfo=clonedTemplate.querySelector(".info");



card.setAttribute("id", `#${pokemon.id.toString().padStart(3,0)}` );
sprite.setAttribute("src", pokemon.sprites.front_default );
number.textContent=`#${pokemon.id.toString().padStart(3,0)}`;
name.textContent=pokemon.name;

showInfo.setAttribute("id", pokemon.id );

showInfo.textContent="Saber más";

out.appendChild(clonedTemplate);

}


fetchPokemons();

function noDisplay(){
  document.querySelector(".numero").style.display="none";
  document.querySelector(".attack").style.display="none";
  document.querySelector(".defense").style.display="none";

}




const searchPokemon=event=>{
  event.preventDefault();
  const {value} =event.target.pokemon1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
  .then(resp=>resp.json())
  .then(pokemon=>createPokemon1(pokemon))
}

function createPokemon1(pokemon){
  document.querySelector("#cards1").style.display="none";
  const out =document.querySelector("#cards2");
  const temp=document.getElementById("template2");
  const clonedTemplate=temp.content.cloneNode(true);
  
  
  let card=clonedTemplate.querySelector(".card2");
  let sprite=clonedTemplate.querySelector("img");
  let number=clonedTemplate.querySelector(".numero2");
  let name=clonedTemplate.querySelector(".name2");
  let showInfo=clonedTemplate.querySelector(".info2");
  card.setAttribute("id", `#${pokemon.id.toString().padStart(3,0)}` );
  sprite.setAttribute("src", pokemon.sprites.front_default );
  number.textContent=`#${pokemon.id.toString().padStart(3,0)}`;
  name.textContent=pokemon.name;
  showInfo.setAttribute("id", pokemon.name );
  showInfo.textContent="Saber más";

  out.appendChild(clonedTemplate);
  
}

function display2(){
  document.querySelector(".numero2").style.display="inline";
  document.querySelector(".attack2").style.display="inline";
  document.querySelector(".defense2").style.display="inline";
  alert("hola");
  document.querySelector(".card2").style.background="red";

}

function noDisplay2(){
  let modal = document.getElementById("cards3");
    modal.style.display = "none";
}
