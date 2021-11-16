import { useEffect, useState } from "react";

const Splash = ({ history }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      history.push("/pokemons");
    }, 2400);
  }, []);

  const textShadow = {
    color: "#000",
    textShadow:
      "5px 5px 10px #ffffff50, -5px -5px 10px #ffffff50, 5px 10px 30px #ffffff20, -5px -10px 30px #ffffff20  !important",
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <h1
          className="font-black text-3xl break-words text-white filter "
          style={{
            filter: "drop-shadow(0px 0px 10px #ffffff80) invert(0%)",
          }}
        >
          Do you like Pokemon?
        </h1>
      </div>
    </>
  );
};

export default Splash;
