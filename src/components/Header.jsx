import logo from "../assets/Logo.svg"
import search from "../assets/search.svg"



export const Header = () => {

    return (
        <header>
            <div className="header">
                <img src={logo} alt="" />
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>Article</li>
                        <li>Contact</li>
                        <li>Purchase</li>
                    </ul>
                </nav>
                <img src={search} alt="" />
            </div>
        </header>
    )
}