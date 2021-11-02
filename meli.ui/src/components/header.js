
import { Link } from '@reach/router'
import logo from './../assets/Logo_ML.png'
import './../styles/header.scss'

export default function Header({ children }) {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                {children}
            </div>
        </header>
    )
}