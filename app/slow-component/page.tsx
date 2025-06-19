"use client";

import { useMemo } from "react";

const SlowComponent = () => {
  console.time("Start Heavy Computation");

  //   This simulates heavy computations
  const numbers = useMemo(() => {
    const numberData = [];

    for (let number = 0; number < 1_000_000; number++) {
      numberData.push(Math.sqrt(number * Math.random() * Math.random()));
    }

    return numberData;
  }, []);

  console.timeEnd("End Heavey Computation");

  return (
    <div>
      <h1>Slow Component</h1>
      <p>{numbers} computed values.</p>
    </div>
  );
};

export default SlowComponent;
