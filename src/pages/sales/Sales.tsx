import { FaChevronRight } from "react-icons/fa";
import { SalesRedIcon } from "../../assets";
import CooffeeIcon from "../../assets/coffe.svg";

function Sales() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-2">
        {[...Array(6).fill(0).map((_, inx) => (
        <div key={inx} className="col-span-1 px-4">
          <div className="flex items-center gap-3">
            <img
              src="https://placehold.co/48x48"
              className="rounded-full"
              alt=""
            />
            <div className="flex items-center gap-2">
              <h1 className="text-primary font-semibold text-[20px]">KFC</h1>
              <SalesRedIcon />
            </div>
          </div>
          <div className="py-3 flex flex-col gap-2">
            <img
              src={CooffeeIcon}
              className="w-full object-cover max-h-[30vh] rounded-2xl"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-[20px] text-primary font-semibold">
                50 ta lavash - bebul tarqatiladi
              </h1>
              <div className="text-sm flex items-center justify-between">
                <span>12.10.2024</span>
                <p className="flex items-center gap-[6px]">
                  <span className="font-medium text-[#0000FF]">Batafsil</span>
                  <FaChevronRight color="#0000FF"/>
                </p>
              </div>
            </div>
          </div>
        </div>  
        ))]}
        
      </div>
    </section>
  );
}

export default Sales;
