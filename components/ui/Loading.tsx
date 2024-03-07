import React, { useEffect, useState } from "react";

const Loading: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white border py-4 px-8 rounded-lg shadow-lg">
        <p>Загрузка...</p>
        <p>Прошло секунд: {seconds}</p>
      </div>
    </div>
  );
};

export default Loading;
