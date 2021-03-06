import { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { faAngleLeft, faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const PokemonDetail = ({ history }) => {
  const queryParams = useQueryParams();
  const id = parseInt(queryParams.get("id"));
  console.log(id);

  const [pokemon, setPokemon] = useState([]);

  const pokeAPI = "https://pokeapi.co/api/v2/pokemon";
  const {
    isLoading: pokeIsLoading,
    error: pokeError,
    data: pokeData,
  } = useQuery(`pokemon?${id}`, () =>
    fetch(`${pokeAPI}/${id}`).then((res) => res.json())
  );

  if (!pokeData) return "None Data";
  if (pokeError) return "error" + error.message;

  if (pokeIsLoading) {
    console.log("loading");
    return "loding...";
  }
  console.log(pokeData);

  return (
    <>
      <div
        className="sticky top-0 text-white mb-4 text-center bg-purple-500 h-[36px]"
        style={{ lineHeight: "36px" }}
      >
        <h1>{id}번째 포켓몬</h1>
        <div
          className="fixed top-0 left-0 w-[36px] h-[36px] text-white flex items-center justify-center cursor-pointer"
          onClick={() => history.goBack()}
        >
          <FontAwesomeIcon icon={faAngleLeft} />{" "}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 items-center px-[12px]">
        <div className="flex justify-center gap-1 max-w-md">
          <div>
            <img
              src={`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${id}.png`}
              alt="{pokeData.name}"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center bg-indigo-200 py-4 px-6 rounded-box text-sm max-w-md w-full text-gray-800">
          <div className="w-full text-gray-800">name : {pokeData.name} </div>
          <div className="w-full">height : {pokeData.height}</div>
          <div className="w-full">weight : {pokeData.weight}</div>
          <div className="w-full">
            skills :{" "}
            {pokeData.abilities.map((ability, idx) => (
              <div className="text-gray-800">- {ability.ability.name}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
