import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default async function Joke(props: any) {
  return (
    <>
      <p className="text-center">{props.setup}</p>
      <p className="text-center">{props.delivery}</p>
    </>
  );
}
