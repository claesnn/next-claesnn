import { Metadata } from "next";
import Counter from "./Counter";

export const metadata: Metadata = {
  title: "Test page",
};

export default function Test() {
  return (
    <>
      <p>Hello from test!</p>
      <Counter />
    </>
  );
}
