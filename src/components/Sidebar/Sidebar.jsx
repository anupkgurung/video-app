import { NavLink } from "react-router-dom";
import { tempDataSidebar }  from "../../tempData";

export const Sidebar = () => {
    return (
        <>
            <aside>
                <ul>
                    {tempDataSidebar.map(({path, name, icon}) => (
                        <li key={path}>
                            <NavLink to={path}></NavLink>
                            <span className="material-icons">{icon}</span>
                            {name}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}