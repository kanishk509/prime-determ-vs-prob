/* globals BigInt */

import React, { useState, useEffect } from "react";

const findFactor = (n) => {
  n = BigInt(n);
  for (let i = BigInt(2); i * i <= n; i++) {
    if (n % i === 0n) return [i, n / i];
  }
  return [1, n];
};

const DeterministicPrimalityTest = (props) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [factors, setFactors] = useState([1, 0]);
  const [timeTaken, setTimeTaken] = useState(0);
  const [num, setNum] = useState(2);

  useEffect(() => {
    setIsProcessing(true);
  }, [props.num]);

  useEffect(() => {
    if (isProcessing) {
      setNum(props.num);

      let timerStart = performance.now();
      let computedFactors = findFactor(props.num);
      let timerEnd = performance.now();

      setFactors(computedFactors);
      setTimeTaken(timerEnd - timerStart);
      setIsProcessing(false);
    }
  }, [isProcessing]);

  return (
    <div>
      <h4>Deterministic Check</h4>
      {isProcessing ? (
        <div>working...</div>
      ) : (
        <div>
          {num.toString()} is...
          <br />
          {factors[0] > 1 ? "COMPOSITE" : "PRIME"} <br />
          {factors[0] > 1 ? (
            <p>
              Factors found: {factors[0].toString()} x {factors[1].toString()}
            </p>
          ) : (
            <p>Could not factorize.</p>
          )}
          Time taken: {timeTaken.toFixed(3)} ms
        </div>
      )}
    </div>
  );
};

export default DeterministicPrimalityTest;
