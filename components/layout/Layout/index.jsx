import BuyPanel from "components/BuyPanel";
import Gallary from "components/Gallary/Index";
import LogoImage from "components/LogoImage";
import LogoVideo from "components/LogoVideo";
import Separator from "components/Separator";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="mt-[90px] min-h-[200px] flex flex-col justify-center">
                <LogoVideo/>
                {/* <LogoImage/> */}
                <BuyPanel/>
                <Separator/>
                <Gallary/>
            </div>
            <Footer />
        </div>
    )
}