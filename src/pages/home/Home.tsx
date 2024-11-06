import CategoriesSection from "../../components/categories/CategoriesSection"
import SwiperSection from "../../components/swiper/SwiperSection"

function Home() {
  return (
    <section>
        <SwiperSection/>
        <CategoriesSection text="Kategoriyalar" extraStyle="text-[14px]"/>
    </section>
  )
}

export default Home