"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl">Note App</h1>
        <button
          onClick={() => signIn()}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Sign In
        </button>
      </nav>
    );
  } else
    return (
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl">Note App</h1>
        <div className="flex items-center gap-4">
          <span>{session.user?.name}</span>
          <button
            onClick={() => signOut()}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      </nav>
    );
};

export default Nav;
