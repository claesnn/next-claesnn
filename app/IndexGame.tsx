"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  animal: z
    .string()
    .min(3, { message: "Answer must be at least 3 characters long" }),
});

export default function IndexGame() {
  const [message, setMessage] = useState("");

  const defaultValues = {
    animal: "",
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = form.handleSubmit((values) => {
    const animal = values.animal.toLowerCase();

    if (animal.includes("cat") || animal.includes("kitten")) {
      setMessage("🎉🎉🎉 You guessed it! Meow! 🎉🎉🎉");
    } else if (animal.includes("dog")) {
      setMessage("Close, but no cigar!");
    } else if (animal.includes("dolphin")) {
      setMessage("Great guess, but no, equally playful though!");
    } else if (animal.includes("shark")) {
      setMessage("No, but they're both predators");
    } else if (
      animal.includes("hamster") ||
      animal.includes("guinea pig") ||
      animal.includes("rabbit")
    ) {
      setMessage("No, but they're both small and cute");
    } else {
      setMessage("Try again!");
    }
  });

  const noMessageHidden = message ? "hidden" : "";
  const messageHidden = message ? "" : "hidden";
  const clearMessage = () => setMessage("");

  return (
    <div className="bg-gray-50 py-10 px-2">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Guess the animal</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit} className={noMessageHidden}>
              <FormField
                control={form.control}
                name="animal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Animal</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter the cutest animal you can think of
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4">
                Submit
              </Button>
            </form>
          </Form>
          <div className={messageHidden}>
            <p>{message}</p>
            <Button onClick={clearMessage} className="mt-4">
              Play again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
