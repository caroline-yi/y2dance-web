import Navigation from "./navigation/navigation"

const Header = () => (
    <header className='header'>
        <picture className="y2dance-logo">
            <iframe title='peanut-butter-jelly-time' src="https://giphy.com/embed/IB9foBA4PVkKA" width="75" height="75" frameBorder="0"></iframe>
        </picture>
        <Navigation />
    </header>
)

export default Header