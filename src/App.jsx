import Head from "./components/head";
import Body from "./components/body";

export default function App() {
  return (
    <div className="flex items-center justify-center flex-col bg-VeryPaleBlue pb-10 md:h-screen bg-[url('./bg-pattern.svg')] bg-no-repeat bg-top bg-[length:390px_350px] md:bg-[length:100%_400px] lg:bg-contain">
      <Head />
      <Body />
    </div>
  );
}
