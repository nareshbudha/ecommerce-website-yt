import BannerSection from "./Components/BannerSection"
import BlogSction from "./Components/BlogSction"
import Category from "./Components/Category"
import FeatureSectionBreakfast from "./Components/FeatureSectionBreakfast"
import FeatureSectionFruits from "./Components/FeatureSectionFruits"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"


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
      
    

      
    </main>
  )
}

export default App