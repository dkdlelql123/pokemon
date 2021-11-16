import { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import cn from "classnames";

const pokeAPI = "https://pokeapi.co/api/v2/pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  const pokemonTotal = 1118;
  const maxPokemonInAPage = 20;
  const offset = 0;
  const [limit, setLimit] = useState(20);

  const { isLoading, error, data } = useQuery(
    `pokeData?offset=${offset}&limit=${limit}`,
    () =>
      fetch(`${pokeAPI}?offset=${offset}&limit=${limit}`).then((res) =>
        res.json()
      )
  );

  if (error) return "An error has occurred: " + error.message;

  if (!isLoading && pokemons.length < limit) {
    setPokemons([...pokemons, ...data.results]);
  }

  const getParamsUrl = (url) => {
    let path = url.split("/");
    return parseInt(path[path.length - 2]);
  };

  const btnPokemonMore = () => {
    console.log("more");
    setLimit(
      limit + maxPokemonInAPage >= pokemonTotal
        ? pokemonTotal
        : limit + maxPokemonInAPage
    );
  };

  return (
    <>
      <ul className="container mx-auto flex flex-wrap gap-[12px] max-w-md">
        {pokemons.map((el, idx) => {
          let id = getParamsUrl(el.url);
          return (
            <li
              key={idx}
              className="inline-flex flex-col items-center bg-white rounded bg-opacity-30"
              style={{ minWidth: "calc(50% - 6px)" }}
            >
              <Link to={`/pokemon/detail?id=${id}`}>
                <div>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${id}.png`}
                    alt={el.name}
                  />
                </div>
                <div className="font-bold text-center">{el.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        className={cn(
          "btn",
          "btn-block",
          "btn-primary",
          "sticky",
          "bottom-0",
          "transition",
          "duration-300",
          { loading: isLoading }
        )}
        onClick={btnPokemonMore}
      >
        more
      </button>
    </>
  );
};

const Pokemon = () => {
  return (
    <>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 text-center h-[36px] w-full filter bg-white opacity-20"></div>
        <h1
          className="sticky top-0 text-white font-bold mb-4 text-center h-[36px]"
          style={{ lineHeight: "36px" }}
        >
          Pokemon
        </h1>
        <PokemonList />
      </div>
    </>
  );
};

export default Pokemon;
