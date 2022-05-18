import { NavLink } from "react-router-dom";
import { tempDataSidebar }  from "../../tempData";

export const Sidebar = () => {
    return (
        <>
            <aside className="video-list-sidebar pd-5">
                <ul>
                    {tempDataSidebar.map(({path, name, icon}) => (
                        <li key={path} className="list-item ml-2 pd-2">
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