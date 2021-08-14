import { useState } from "react"
import Image from "next/image"

import Link from "next/link"

export const TopMenu = () => {
    const [currentLanguage, setCurrentLanguage] = useState("en")

    return (
        <div className="mainLayout__header__topMenu">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li>About</li>
                <li>Help</li>
                <li>Contact</li>
            </ul>

            <div>
                <div>
                    <Image src={currentLanguage === "en" ? "/images/en.png" : "/images/id.png"} alt="Language" width={20} height={20} />
                    <div className="btn-group">
                        <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {currentLanguage === "en" ? "English" : "Indonesia"}
                        </button>
                        <ul className="dropdown-menu">
                            <li onClick={() => setCurrentLanguage("en")}><a href="#">&nbsp;English</a></li>
                            <li onClick={() => setCurrentLanguage("id")}><a href="#">&nbsp;Indonesia</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <span>Hi, Username</span>
                </div>
            </div>
        </div>
    )
}

export const MainMenu = () => {
    return (
        <div className="mainLayout__header__mainMenu">
            <div>
                <Image src="/images/logo.png" alt="Logo" width={182} height={54} />
                <ul>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>News</li>
                    <li>Services</li>
                </ul>
            </div>
            <button type="button" className="btn btn-success">+ Add Listing</button>
        </div>
    )
}

export default function Header() {
    return (
        <section className="mainLayout__header">
            <TopMenu />
            <MainMenu />
        </section>
    )
}