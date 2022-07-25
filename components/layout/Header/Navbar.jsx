import NavItem from "./navitem"

export default function Navbar() {
    return (
        <div>
            <NavItem link='https://www.cryptowarriorscoin.com/index.html' target='_blank' label='Home'/>
            <NavItem link='https://www.cryptowarriorscoin.com/index.html#team02-d' target='_blank' label='About'/>
            <NavItem link='https://www.cryptowarriorscoin.com/index.html#features014-0' target='_blank' label='Ecosystem'/>
            <NavItem link='https://www.cryptowarriorscoin.com/index.html#numbers02-e' target='_blank' label='Tokenomics'/>
        </div>
    )
}