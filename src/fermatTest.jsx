/* globals BigInt */

import React, { useState, useEffect } from "react";

// calculate x^y % p efficiently
const modularExp = (base, exp, p) => {
  let x = BigInt(base);
  p = BigInt(p);
  x = x % p;
  let res = BigInt(1);

  while (exp > 0n) {
    if ((exp & 1n) === 1n) {
      res = (res * x) % p;
    }

    x = (x * x) % p;
    exp = exp >> 1n;
  }

  return Number(res);
};

const fermatCheck = (n, iter) => {
  let checkedBases = new Set();
  checkedBases.add(1);

  while (iter--) {
    let randBase = 1;
    while (checkedBases.has(randBase)) {
      randBase = BigInt(Math.floor(Math.random())) * n;
      if (randBase < 2n) randBase = 2n;
    }
    let expRemainder = modularExp(randBase, n - 1n, n);
    if (expRemainder !== 1) return [randBase, expRemainder];
  }

  return [1, 0];
};

const FermatPrimalityTest = (props) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [num, setNum] = useState(2);
  const [base, setBase] = useState([1, 0]);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    setIsProcessing(true);
  }, [props.num, props.iterations]);

  useEffect(() => {
    if (isProcessing) {
      setNum(props.num);

      let timerStart = performance.now();
      let computedBase = fermatCheck(props.num, props.iterations);
      let timerEnd = performance.now();

      setBase(computedBase);
      setTimeTaken(timerEnd - timerStart);
      setIsProcessing(false);
    }
  }, [isProcessing]);

  return (
    <div>
      <h4>Fermat's Check (Probabilistic)</h4>
      {isProcessing ? (
        <div>working...</div>
      ) : (
        <div>
          {num.toString()} is...
          <br />
          {base[0] > 1 ? "COMPOSITE" : "PRIME"} <br />
          Iterations: {props.iterations}, Confidence:{" "}
          {base[0] > 1 ? 100 : 100 * (1 - Math.pow(2, -1 * props.iterations))} %
          {base[0] > 1 ? (
            <p class="my-2">
              {base[0].toString()}
              <sup>{props.num.toString()}-1</sup> ≡ {base[1].toString()} (mod{" "}
              {props.num.toString()})
            </p>
          ) : (
            <br />
          )}
          <div class="my-2">Time taken: {timeTaken.toFixed(3)} ms</div>
        </div>
      )}
    </div>
  );
};

export default FermatPrimalityTest;
