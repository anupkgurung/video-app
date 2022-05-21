import { NavLink } from "react-router-dom";
import { tempDataSidebar }  from "../../tempData";

export const Sidebar = () => {
    return (
        <>
            <aside className="video-list-sidebar pd-5">
                <ul>
                    {tempDataSidebar.map(({path, name, icon}) => (
                        <li key={path}>
                            <NavLink to={path} className="link-style-none list-item ml-2 pd-2">
                            <span className="material-icons">{icon}</span>
                            <span className="ml-3">{name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}