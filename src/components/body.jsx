import Top from "./Body/top";
import Bottom from "./Body/bottom";

export default function Body() {
  return (
    <div className="flex items-center justify-center flex-col gap-8 py-10 bg-White w-11/12 rounded-xl shadow-2xl md:gap-5 md:py-5 md:w-7/12 lg:w-5/12">
      <Top />
      <Bottom />
    </div>
  );
}
