import React from "react";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-80">
          <div className="flex items-center h-full bg-red-700 w-full justify-center">
            <h1 className="text-3xl text-black">Left content</h1>
          </div>
          <div className="flex items-center h-full bg-blue-700 w-full justify-center">
            <h1 className="text-3xl text-black">Right content</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
