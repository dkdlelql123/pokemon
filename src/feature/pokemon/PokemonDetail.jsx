import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PokemonDetail = ({ history }) => {
  let query = useQuery();
  const id = query.get("id");

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
          {" "}
          ←{" "}
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
