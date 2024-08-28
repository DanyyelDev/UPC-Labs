import Image from "next/image";

export const Calendar = () => {
  return (
    <>
      <div className="w-full min-h-min flex flex-col items-center p-10 bg-slate-50 rounded-xl">
        <input
          type="date"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs text-center"
        />

        <details className="dropdown">
          <summary className="btn m-1">Seleccionar laboratorio</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>

        <div className="w-full h-96 justify-center flex flex-row p-10 border-slate-300 ">
          <div id="schedules" className="w-52 border-2 border-slate-300">
            <h2 className="text-center p-2 font-semibold bg-slate-300">Horarios</h2>
            <ul className="h-5/6 grid grid-cols-1 divide-y text-center overflow-auto p-2">
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>10:00am - 12:00m</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>12:00m - 2:00pm</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>2:00pm - 4:00pm</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>4:00pm - 6:00pm</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>6:00pm - 8:00pm</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>10:00am - 12:00m</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>12:00m - 2:00pm</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>2:00pm - 4:00pm</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>4:00pm - 6:00pm</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>6:00pm - 8:00pm</a>
              </li>
            </ul>
          </div>

          <div
            id="pcs-available"
            className="w-2/5 border-2 border-x-0 border-slate-300"
          >
            <h2 className="text-center p-2 font-semibold bg-slate-300">PCs Disponibles</h2>
            <div className="h-full">
              <img src="/images/Plano1.jpg" className="size-fit" />
            </div>
          </div>

          <div
            id="additional-equipment-available"
            className="border-2 border-slate-300 w-96"
          >
            <h2 className="text-center p-2 font-semibold bg-slate-300">Equipos Adicionales</h2>
            <ul className="h-5/6 grid grid-cols-1 divide-y text-center overflow-auto p-2">
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
              <li className="h-10 p-2 hover:bg-slate-300">
                <a>Item -------------</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
