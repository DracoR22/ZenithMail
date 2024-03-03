import Header from "@/shared/widgets/header/header"
import Banner from "./elements/banner"
import Branding from "./elements/branding"
import Benefits from "./elements/benefits"
import FeatureHighlight from "./elements/feature-highlight"
import Pricing from "./elements/pricing"
import Footer from "@/shared/widgets/footer/footer"

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Branding/>
        <Benefits/>
        <FeatureHighlight/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Home