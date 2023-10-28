import { useState } from "react";
import { Slider } from "@material-tailwind/react";

export default function Top() {
  // State to hold the slider's value
  const [sliderValue, setSliderValue] = useState(3);

  // State to hold the new value & view for the element in the markup
  const initialValue = 16;
  const initialView = "100K";
  const [newValue, setNewValue] = useState(initialValue);
  const [newView, setNewView] = useState(initialView);

  // Function to handle slider value changes
  const handleSliderChange = (event) => {
    const newSliderValue = parseInt(event.target.value, 10);
    setSliderValue(newSliderValue);

    // Update the monthly price based on the selected slider value
    if (newSliderValue === 1) {
      setNewValue(8);
      setNewView("10K");
    } else if (newSliderValue === 2) {
      setNewValue(12);
      setNewView("50K");
    } else if (newSliderValue === 4) {
      setNewValue(24);
      setNewView("500K");
    } else if (newSliderValue === 5) {
      setNewValue(36);
      setNewView("1M");
    } else {
      setNewValue(initialValue);
      setNewView(initialView);
    }
  };

  const [yearValue, setYearValue] = useState("monthly");

  const handleYearChange = () => {
    setYearValue(yearValue === "monthly" ? "yearly" : "monthly");
  };

  // Calculate monthly and yearly prices based on slider value
  const monthlyPrice = newValue;
  const yearlyPrice = newValue * 12 * 0.75;

  return (
    <div className="flex items-center justify-center flex-col gap-5 border-b border-LightGrayishBlue w-full py-5 px-10 md:gap-9">
      <div className="flex items-center justify-between flex-col gap-7 w-full md:flex-row">
        <p className="text-base text-GrayishBlue font-semibold md:text-[15px]">
          {newView} PAGEVIEWS
        </p>
        <Slider
          min="1"
          max="5"
          value={sliderValue}
          onChange={handleSliderChange}
          className="md:hidden"
        />
        <p className="text-4xl text-DarkDesaturatedBlue font-semibold">
          ${yearValue === "yearly" ? yearlyPrice : monthlyPrice}{" "}
          <span className="text-base text-GrayishBlue md:text-[15px]">
            / {yearValue}
          </span>
        </p>
      </div>
      <div className="w-full">
        <Slider
          type="range"
          min="1"
          max="5"
          value={sliderValue}
          onChange={handleSliderChange}
          className="hidden md:block bg-LightGrayishBlue"
          barClassName="bg-SoftCyan"
          thumbClassName="[&::-webkit-slider-thumb]:bg-StrongCyan [&::-webkit-slider-thumb]:p-4 [&::-webkit-slider-thumb]:-mt-3 [&::-webkit-slider-thumb]:ring-0 [&::-webkit-slider-thumb]:bg-[url('./icon-check.svg')]"
        />
      </div>
      <div className="flex items-center justify-center flex-row gap-2 relative">
        <p className="text-GrayishBlue text-sm font-semibold">
          Monthly Billing
        </p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onClick={handleYearChange}
            type="checkbox"
            className="sr-only peer"
          ></input>
          <div className="w-11 h-6 bg-LightGrayishBlue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-custom-Grad1 to-custom-Grad2"></div>
        </label>
        <p className="text-GrayishBlue text-sm font-semibold">Yearly Billing</p>
        <span className="text-LightRed bg-LightGrayishRed rounded-full flex items-center px-1 absolute -right-12 md:-right-28">
          -25%<span className="hidden md:block pl-1">discount</span>
        </span>
      </div>
    </div>
  );
}
