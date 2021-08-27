import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import Button from "./Button"

const Header = ({ title, onToggle, showAddTask }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button
                    color={showAddTask ? "crimson" : "green"}
                    text={showAddTask ? "Close" : "Add"}
                    onClick={onToggle}
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker Default",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
