export default function Bottom() {
  return (
    <div className="flex items-center justify-center flex-col w-full gap-10 py-5 px-10  lg:flex-row lg:justify-between">
      <ul className="flex flex-col gap-2 text-GrayishBlue font-semibold md:items-start md:gap-1 p-0 m-0">
        <li className="flex items-center justify-center gap-4">
          <img src="./icon-check.svg" alt="icon-check" />
          Unlimited websites
        </li>
        <li className="flex items-center justify-center gap-4">
          <img src="./icon-check.svg" alt="icon-check" />
          100% data ownership
        </li>
        <li className="flex items-center justify-center gap-4">
          <img src="./icon-check.svg" alt="icon-check" />
          Email reports
        </li>
      </ul>
      <button className="bg-DarkDesaturatedBlue text-LightGrayishB font-semibold rounded-full w-56 p-3 hover:text-White">
        Start my trial
      </button>
    </div>
  );
}
