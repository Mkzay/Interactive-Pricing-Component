export default function Head() {
  return (
    <div className="flex items-center justify-center flex-col gap-2 bg-[url('./pattern-circles.svg')] bg-no-repeat bg-center bg-auto py-20 w-11/12">
      <h1 className="text-xl text-DarkDesaturatedBlue font-semibold md:text-4xl">
        Simple, traffic-based pricing
      </h1>
      <p className="text-GrayishBlue font-semibold flex items-center flex-col gap-1 md:flex-row">
        Sign-up for our 30-day trial. <span>No credit card required.</span>
      </p>
    </div>
  );
}
