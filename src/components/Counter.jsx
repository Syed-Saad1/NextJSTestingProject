"use client";

import { useCounterStore } from "@/store/useCounterStore";

export default function Counter() {
  const count = useCounterStore((state) => state.count);

  const increment = useCounterStore((state) => state.increment);

  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button
        disabled={count >= 100}
        className="bg-blue-700 text-white mr-2 px-2 py-1 rounded-sm"
        onClick={increment}
      >
        Increment
      </button>

      <button
        disabled={count <= 0}
        className="bg-red-700 text-white mr-2 px-2 py-1 rounded-sm"
        onClick={decrement}
      >
        Decrement
      </button>

      <button
        disabled={count === 0}
        className="bg-gray-700 disabled:text-blue-600 text-white mr-2 px-2 py-1 rounded-sm"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}
