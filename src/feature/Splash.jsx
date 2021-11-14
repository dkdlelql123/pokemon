import { useEffect, useState } from "react";

const Splash = ({ history }) => {
  const [splash, setSplash] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      splash && history.push("/pokemon");
    }, 2400);
  }, [splash]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="font-bold text-2xl break-words">Do you like Pokemon?</h1>
      </div>
    </>
  );
};

export default Splash;
