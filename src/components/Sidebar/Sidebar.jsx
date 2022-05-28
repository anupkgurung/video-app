import { NavLink } from "react-router-dom";
import { tempDataSidebar }  from "../../tempData";

export const Sidebar = () => {

    const getActiveNavStyle = ({isActive}) => ({
            borderRadius: '5px',
            backgroundColor : isActive ? 'var(--doc-hover-light)' : ''
    })

    return (
        <>
            <aside className="video-list-sidebar pd-5">
                <ul>
                    {tempDataSidebar.map(({path, name, icon}) => (
                        <li key={path} className="padding-top-2">
                            <NavLink to={path} style={getActiveNavStyle} className="link-style-none list-item ml-2 pd-2 cursor-pointer">
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