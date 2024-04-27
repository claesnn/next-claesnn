"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count is {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increase</Button>
    </>
  );
}
