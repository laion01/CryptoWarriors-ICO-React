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
            <div className="bg-[white] py-[30px] xl:mx-[10%] lg:mx-[120px] md:mx-[60px] sm:mx-[30px] px-20px">
                <p className="text-[1.2rem] p-[20px]">The Crypto Warrior Tokens are functional utility tokens designed for use only on the Company’s business platform that is yet to be developed. The Tokens are not securities. Tokens do not entitle you to any equity, governance, voting or similar right or entitlement in the Company or in any of its affiliated companies. Tokens are sold as digital products, similar to downloadable software and the like. The Company does not recommend that you purchase Tokens unless you have prior experience with cryptographic tokens, blockchain-based software and distributed ledger technology and unless you have taken independent professional advice.</p>
            </div>
        </div>
    )
}