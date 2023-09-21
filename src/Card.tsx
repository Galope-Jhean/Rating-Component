import thankyou from "./assets/illustration-thank-you.svg";
import Button from "./Button";
import { useState } from "react";
import star from "./assets/icon-star.svg";

function Card() {
  const [successState, setSuccessState] = useState<boolean>(false);

  const [buttonState, setButtonState] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [isRated, setRated] = useState<boolean>(false);

  const [currentRating, setCurrentRating] = useState(0);

  const handleButtonClick = (index: number) => {
    const newButtonStates = buttonState.map((state, i) =>
      i === index ? !state : false
    );
    setButtonState(newButtonStates);
    setCurrentRating(index + 1);
    setRated(!isRated);
  };

  const buttons = [1, 2, 3, 4, 5].map((rating, index) => (
    <Button
      key={rating}
      rating={rating}
      isClicked={buttonState[index]}
      onClick={() => handleButtonClick(index)}
    />
  ));

  return successState ? (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 w-96 h-96 p-8 rounded-lg shadow-md flex items-center justify-center">
        <div className="self-start flex flex-col items-center justify-center mt-2">
          <img src={thankyou} alt="" />
          <div className="p-1 mt-5 w-[10.625rem] rounded-full bg-gray-700">
            <p className="ml-2 mr-2 mt-1 text-orange-500 text-sm text-center select-none">
              You selected {currentRating} out of 5
            </p>
          </div>
          <p className="text-2xl font-bold text-white text-center mt-5">
            Thank you!
          </p>
          <p className="text-center text-gray-50 opacity-70 text-sm mt-5">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 w-96 h-96 p-8 rounded-lg shadow-md">
        <div className="w-10 h-10 bg-slate-700 flex items-center justify-center rounded-full">
          <img src={star} alt="" className="w-4 h-4" />
        </div>
        <h1 className="text-white text-2xl font-bold mt-5">How did we do?</h1>
        <p className="text-white opacity-70 text-sm font-thin mt-5">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex gap-7 items-center justify-center mt-5">
          {buttons}
        </div>
        <button
          className="bg-orange-600 p-3 rounded-full w-full mt-8 shadow-md text-white text-sm font-bold tracking-widest hover:bg-white hover:text-orange-500 transition delay-90"
          onClick={() => {
            setSuccessState(!successState);
          }}
          disabled={isRated ? false : true}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Card;
