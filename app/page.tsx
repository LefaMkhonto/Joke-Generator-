"use client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import Joke from "./components/Joke";

async function JokeList() {
  var response = await fetch("https://v2.jokeapi.dev/joke/Any", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export default async function Home() {
  var jokes = await JokeList();

  return (
    <div className=" h-screen grid grid-cols-1 place-items-center bg-blue-300 pb-16">
      <div className="p-16 grid justify-center w-96">
        <h1 className="p-4 text-blue-700 text-3xl text-center bg-slate-50">
          Random Joke Generator
        </h1>
      </div>
      <div className="w-96 p-4 bg-slate-50 shadow-xl">
        <div className="m-4 bg-slate-50 shadow-lg">
          {" "}
          {jokes.type === "twopart" ? (
            <Joke setup={jokes.setup} delivery={jokes.delivery}></Joke>
          ) : (
            <Joke setup={jokes.joke}></Joke>
          )}
        </div>
        <div className="p-4 grid place-items-center">
          {" "}
          <Link href="/">
            <button className=" p-4 rounded-lg bg-blue-700 text-white">
              New Joke
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
