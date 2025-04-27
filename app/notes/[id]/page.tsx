import Tiptap from "@/app/components/editor";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Notes</h1>
        <p className="text-gray-600 mb-8">Create and manage your notes here.</p>
        {/* Add your note creation or management UI here */}
        <div className="mb-4">
          <Tiptap />
          <button className="bg-blue-500 text-white rounded px-4 py-2">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
