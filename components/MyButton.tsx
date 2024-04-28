"use client";

import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Say to a client component in a server rendered page: {count}
    </button>
  );
}
