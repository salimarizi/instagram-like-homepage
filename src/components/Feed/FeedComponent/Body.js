import React, { useState } from "react";

const FeedBody = (props) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const handleNext = () => {
    if (currentContentIndex === props.contents.length - 1) {
      setCurrentContentIndex(0);
    } else {
      setCurrentContentIndex(currentContentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentContentIndex === 0) {
      setCurrentContentIndex(props.contents.length - 1);
    } else {
      setCurrentContentIndex(currentContentIndex - 1);
    }
  };

  return (
    <div className="w-full flex justify-center">
      {props.contents.length === 1 ? (
        props.contents[0].type === "image" ? (
          <img src={props.contents[0].url} className="block w-full" />
        ) : (
          <video loop autoPlay muted>
            <source src={props.contents[0].url} type="video/mp4" />
          </video>
        )
      ) : (
        <div
          id="carouselExampleControls"
          className="relative"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {props.contents.map((content, index) => {
              return (
                <div
                  className={
                    "relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none " +
                    (currentContentIndex === index ? "block" : "hidden")
                  }
                  key={index}
                >
                  {content.type === "image" ? (
                    <img src={content.url} className="block w-full" />
                  ) : (
                    <video loop autoPlay muted>
                      <source src={content.url} type="video/mp4" />
                    </video>
                  )}
                </div>
              );
            })}
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="prev"
            onClick={handlePrev}
          >
            <span className="inline-block h-8 w-8">
              <img src="./images/prev.svg" />
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="next"
            onClick={handleNext}
          >
            <span className="inline-block h-8 w-8">
              <img src="./images/next.svg" />
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedBody;
