import { FaChevronRight } from "react-icons/fa";
import { TopIcon } from "../../assets";
import CategoriesSection from "../../components/categories/CategoriesSection";
import SwiperSection from "../../components/swiper/SwiperSection";

function Home() {
  return (
    <section>
      <SwiperSection />
      <div className="container grid grid-cols-7 gap-1 mt-3">
        {[
          ...Array(7)
            .fill(0)
            .map((_, inx) => (
              <div
                key={inx}
                className="col-span-1 bg-[#FFD60080] flex flex-col gap-3 rounded-xl p-3"
              >
                <TopIcon />
                <div className="flex items-center justify-between">
                  <h1 className="text-primary font-semibold text-lg">Tops</h1>
                  <FaChevronRight />
                </div>
              </div>
            )),
        ]}
      </div>
      <CategoriesSection text="Kategoriyalar" extraStyle="text-[14px]" />
    </section>
  );
}

export default Home;
