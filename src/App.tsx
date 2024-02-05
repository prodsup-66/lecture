import FileBrowser from "./components/FileBrowser";
import useData from "./lib/useData";

const ytURL_001 =
  "https://youtube.com/playlist?list=PLNGLpHQhvGrtADMjrklIf4BfEilcXRWtY&si=X-wv_NSQfswt6_dN";
const ytURL_003 =
  "https://youtube.com/playlist?list=PLNGLpHQhvGrt3R8-qP3sbTfZvD9Ye6psv&si=HjpoGc7Q1PPYljuY";
const ytURL_004 =
  "https://youtube.com/playlist?list=PLNGLpHQhvGruI5ZjgURM4TOsVJMB1RV-N&si=AL5Mud7HZ3q2GdF2";
const ytURL_002 =
  "https://youtube.com/playlist?list=PLNGLpHQhvGrthxX356tY7muwv-irYz65n&si=Z6zAd_5U20rFkgl5";
const ytURL_006 =
  "https://youtube.com/playlist?list=PLNGLpHQhvGrvTx3yNAW2qsFQW5hbXGykL&si=q_XAXfwa5PV6n6j6";
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
            href={ytURL_001}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            YT (001/801)
          </a>
          <a
            href={ytURL_002}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            YT (002/802)
          </a>
          <a
            href={ytURL_003}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            YT (003/803)
          </a>
          <a
            href={ytURL_004}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            YT (004/804)
          </a>
          <a
            href={ytURL_006}
            target="_blank"
            className="border px-2 py-1 rounded-lg bg-red-600 text-white text-sm lg:text-lg font-bold"
          >
            YT (006/805)
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
