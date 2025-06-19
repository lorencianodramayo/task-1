"use client";

import { useEffect, useState } from "react";

type DataProp = number[] | null;

function OptimizedComponent() {
  const [data, setData] = useState<DataProp>(null);

  useEffect(() => {
    const webWorker = new Worker("/worker.js");

    webWorker.postMessage("start worker");

    webWorker.onmessage = (event) => {
      setData(event.data);
      webWorker.terminate();
    };

    return () => webWorker.terminate();
  }, []);

  return (
    <div>
      <h1>Optimized Component via Web Worker</h1>
      <p>{data ? `${data} computed values.` : "Loading..."}</p>
    </div>
  );
}

export default OptimizedComponent;
