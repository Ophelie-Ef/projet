import { menuentries } from "../../menuentries";
import ListMenu from "../ListMenu/ListMenu";
import "./Menu.css";

const Menu = (props) => {
    return (
        <nav>Bonjour !
            <ListMenu sendEntries={props.sendEntries}></ListMenu>
        </nav>
    )
}

export default Menu;