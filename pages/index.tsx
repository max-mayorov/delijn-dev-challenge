import { useState } from "react";

const data = {
  stelplaats: "De Lijn Arsenaal",
  parking: [],
  garage: {
    groot: [
      { bus: "1000", type: "GROOT" },
      { bus: "1001", type: "GROOT" },
      { bus: "1002", type: "GROOT" },
      { bus: "2000", type: "NORMAAL" },
      { bus: "2001", type: "NORMAAL" },
    ],
    medium: [
      { bus: "2002", type: "NORMAAL" },
      { bus: "2003", type: "NORMAAL" },
      { bus: "2004", type: "NORMAAL" },
      { bus: "2005", type: "NORMAAL" },
      { bus: "3000", type: "MINI" },
      { bus: "3001", type: "MINI" },
      { bus: "3002", type: "MINI" },
      { bus: "3003", type: "MINI" },
    ],
    klein: [
      { bus: "3004", type: "MINI" },
      { bus: "3005", type: "MINI" },
      { bus: "3006", type: "MINI" },
      { bus: "3007", type: "MINI" },
      { bus: "3008", type: "MINI" },
      { bus: "3009", type: "MINI" },
      { bus: "3010", type: "MINI" },
      { bus: "3011", type: "MINI" },
      { bus: "3012", type: "MINI" },
    ],
  },
};

const initial = [
  { bus: "1000", type: "GROOT" },
  { bus: "1001", type: "GROOT" },
  { bus: "1002", type: "GROOT" },
  { bus: "2000", type: "NORMAAL" },
  { bus: "2001", type: "NORMAAL" },
  { bus: "2002", type: "NORMAAL" },
  { bus: "2003", type: "NORMAAL" },
  { bus: "2004", type: "NORMAAL" },
  { bus: "2005", type: "NORMAAL" },
  { bus: "3000", type: "MINI" },
  { bus: "3001", type: "MINI" },
  { bus: "3002", type: "MINI" },
  { bus: "3003", type: "MINI" },
  { bus: "3004", type: "MINI" },
  { bus: "3005", type: "MINI" },
  { bus: "3006", type: "MINI" },
  { bus: "3007", type: "MINI" },
  { bus: "3008", type: "MINI" },
  { bus: "3009", type: "MINI" },
  { bus: "3010", type: "MINI" },
  { bus: "3011", type: "MINI" },
  { bus: "3012", type: "MINI" },
];
const MULTIPLIER = 40;
const MAPPING = {
  GROOT: 4,
  NORMAAL: 2,
  MINI: 1,
} as any;

export default function Home() {
  const [algoritme, setAlgoritme] = useState("V1");
  const [bussen, setBussen] = useState(initial);
  const [busNr, setBusNr] = useState("");
  return (
    <main className={`flex min-h-screen flex-col justify-start p-24 gap-3`}>
      <div>Bussen</div>
      <div>
        Aglorithm:{" "}
        <a
          className={algoritme === "V1" ? "font-bold" : ""}
          onClick={() => {
            setAlgoritme("V1");
          }}
        >
          V1
        </a>{" "}
        <a
          className={algoritme === "V2" ? "font-bold" : ""}
          onClick={() => {
            setAlgoritme("V2");
          }}
        >
          V2
        </a>
        <div>
          <input type="text" placeholder="Bus nr" value={busNr} />
          <button
            onClick={() => {
              setBussen([...bussen, { bus: busNr, type: "GROOT" }]);
              setBusNr("");
            }}
          >
            Groot
          </button>
          <button
            onClick={() => {
              setBussen([...bussen, { bus: busNr, type: "NORMAAL" }]);
              setBusNr("");
            }}
          >
            Medium
          </button>
          <button
            onClick={() => {
              setBussen([...bussen, { bus: busNr, type: "MINI" }]);
              setBusNr("");
            }}
          >
            Klein
          </button>
        </div>
        <div>
          {bussen.map((bus) => (
            <div
              className="bg-yellow-100 "
              style={{ width: MAPPING[bus.type] * MULTIPLIER + "px" }}
              key={bus.bus}
            >
              {bus.bus}{" "}
            </div>
          ))}
        </div>
      </div>
      <div>Platsing</div>
      <div
        className={`bg-red-400 p-4  flex gap-2`}
        style={{ width: 4 * 4 * MULTIPLIER + "px" }}
      >
        {data.garage.groot.map((bus) => {
          const w = MAPPING[bus.type] * MULTIPLIER;
          return (
            <div
              className={` bg-gray-100`}
              key={bus.bus}
              style={{ width: w + "px" }}
            >
              {bus.bus}
            </div>
          );
        })}
      </div>
      <div
        className={`bg-blue-400 p-4  flex gap-2`}
        style={{ width: 6 * 2 * MULTIPLIER + "px" }}
      >
        {data.garage.medium.map((bus) => {
          const w = MAPPING[bus.type] * MULTIPLIER;
          return (
            <div
              className={`w-[${w}px] bg-gray-100`}
              key={bus.bus}
              style={{ width: w + "px" }}
            >
              {bus.bus}
            </div>
          );
        })}
      </div>
      <div
        className={`bg-green-400 p-4 flex gap-2`}
        style={{ width: 10 * MULTIPLIER + "px" }}
      >
        {data.garage.klein.map((bus) => {
          const w = MAPPING[bus.type] * MULTIPLIER;
          return (
            <div
              className={`w-[${w}px] bg-gray-100`}
              key={bus.bus}
              style={{ width: w + "px" }}
            >
              {bus.bus}
            </div>
          );
        })}
      </div>
    </main>
  );
}
