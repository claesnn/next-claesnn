"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function MyButton() {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount(count + 1)}>
      Say to a client component in a server rendered page: {count}
    </Button>
  );
}
