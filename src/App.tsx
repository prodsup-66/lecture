import FileBrowser from "./components/FileBrowser";
import useData from "./lib/useData";

const youtubeURL803 =
  "https://youtube.com/playlist?list=PLNGLpHQhvGrt3R8-qP3sbTfZvD9Ye6psv&si=HjpoGc7Q1PPYljuY";
const pastProjectURL =
  "https://youtube.com/playlist?list=PLNGLpHQhvGrtqn6UYxUYXm7C0auAYrh_O&si=GxlTb1B8mTPiG9f3";

function App() {
  useData();
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-col gap-3 items-start lg:flex-row lg:items-center lg:justify-between">
        <div className="font-extrabold text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Prodsup 66
        </div>

        <div className="flex gap-2">
          <a
            href={youtubeURL803}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            Youtube VDO (003/803)
          </a>
          <a
            href={pastProjectURL}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-purple-500 text-white text-sm lg:text-lg font-bold"
          >
            Projects
          </a>
        </div>
      </div>
      <div className="mt-8">
        <FileBrowser />
      </div>
    </div>
  );
}

export default App;
