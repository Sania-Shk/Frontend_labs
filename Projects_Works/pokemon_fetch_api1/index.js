let outerCover = document.querySelector(".outerCover");
let nameId = document.querySelector("#nameId");
let pokiID = document.querySelector("#pokiID");
let weightId = document.querySelector("#weightId");
let heightId = document.querySelector("#heightId");
let AbilityId = document.querySelector("#AbilityId");
let TypesId = document.querySelector("#TypesId");
let pokemonID = document.querySelector("#pokemonID");
let pokemonSpirit = document.querySelector("#pokemonSpirit");

async function getData() {
  try {
    outerCover.style.display = "block";
    let value = pokemonID.value.toLowerCase();
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
    if (!data.ok) {
      throw new Error("this pokemon doesn't exist");
    }

    let respond = await data.json();

    // ------------------------
    pokemonSpirit.src = respond.sprites.front_default;
    pokemonSpirit.style.display = "block";
    nameId.textContent = `${respond.name}`;
    pokiID.textContent = `Lvl:${respond.id}`;
    weightId.textContent = `Weight : ${respond.weight}`;
    heightId.textContent = `Height : ${respond.height}`;
    AbilityId.textContent = `Ability🔥  :${respond.abilities.map((item) => item.ability.name).join("  , ")}`;
    TypesId.textContent = `Type⚡    :${respond.types.map((item) => item.type.name).join("  , ")}`;
    // ------------------------
  } catch (error) {
    outerCover.style.display = "none";
    alert(error.message);
  }
}
