import React from "react";
import { Mint } from "./Mint";
import { VideoComponent } from "./Videocom";


function Main() {
  return (
    <div className="md:h-[90vh]">
      <div className="flex flex-col mt-auto md:flex-row gap-5 items-center max-w-7xl m-auto py-10 md:py-5 ">
        <VideoComponent />
        <Mint />
      </div>
    </div>
  );
}

export default Main;
