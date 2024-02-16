import BannerSection from "./Components/BannerSection"
import BlogSction from "./Components/BlogSction"
import Category from "./Components/Category"
import FeatureSectionBreakfast from "./Components/FeatureSectionBreakfast"
import FeatureSectionFruits from "./Components/FeatureSectionFruits"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import NewsLetter from "./Components/NewsLetter"


const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Category/>
      <FeatureSectionFruits/>
      <FeatureSectionBreakfast/>
      <BannerSection/>
      <BlogSction/>
      <NewsLetter/>
      <Footer/>
      
    

      
    </main>
  )
}

export default App