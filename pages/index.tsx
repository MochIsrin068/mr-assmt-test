import { MainLayout } from '~/layouts'
import Banner from '~/components/home/banner'
import DownloadSection from '~/components/home/download'
import SearchBox from '~/components/home/searchBox'
import UsedProduct from '~/components/home/usedProduct'
import NewProduct from '~/components/home/newProduct'

// General Components
import CategoriesCard from '~/components/categoriesCard'
import OnlineSupportCard from '~/components/onlineSupport'
import NewsLetterCard from '~/components/newsLetterCard'
import AboutMotorCard from '~/components/aboutMotor'
import Meta from '~/components/meta'

const Home = () => {
  return (
    <MainLayout>
      <Meta title="Modal Rakyat - Home" desc="Modal Rakyat Home Pages" />
      <main className='home'>
        <Banner />
        <section className='home__content'>
          <div className='home__content__left'>
            <SearchBox />
            <UsedProduct />
            <NewProduct />
          </div>
          <aside className='home__content__right'>
            <CategoriesCard />
            <OnlineSupportCard />
            <NewsLetterCard />
            <AboutMotorCard />
          </aside>
        </section>
        <DownloadSection />
      </main>
    </MainLayout>
  )
}

export default Home