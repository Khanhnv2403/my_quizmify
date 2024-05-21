import React from "react";
import { Card } from "./ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import { Separator } from "./ui/separator";

type Props = {
  correctAnswer: number;
  wrongAnswer: number;
};

const MCQCounter = ({ correctAnswer, wrongAnswer }: Props) => {
  return (
    <Card className="flex flex-row items-center justify-center p-4">
      <CheckCircle2 color="green" size={30} />
      <span className="mx-2 text-2xl text-[green]">{correctAnswer}</span>
      <Separator orientation="vertical" />
      <span className="mx-2 text-2xl text-[red]">{wrongAnswer}</span>
      <XCircle color="red" size={30} />
    </Card>
  );
};

export default MCQCounter;
