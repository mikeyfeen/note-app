"use client";
import React from "react";

const login = () => {
  const signin = async (email: string, password: string) => {
    const response = await fetch(`api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    return new Response(JSON.stringify(data));
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-[32px] font-bold">Welcome to Note App</h1>
        <p className="text-[16px]">Please sign in to continue.</p>
        <button
          onClick={() => {
            signin("test", "test");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
      </main>
    </div>
  );
};

export default login;
