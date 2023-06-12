import React, { useRef, useEffect } from "react";

export const VideoComponent = () => {
  const videoRef: any = useRef(null);

  const attemptPlay = () => {
    videoRef &&
      videoRef.current &&
      videoRef.current.play().catch((error: any) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="relative p-2 md:p-16">
      <video          className="w-full h-auto rounded-2xl shadow"
 ref={videoRef} playsInline loop muted>
        <source src="/Video/download.mp4" type="video/mp4" />
        {/* Add additional source tags for different video formats if needed */}
      </video>
    </div>
  );
};
