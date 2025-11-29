import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const items = [
{
    title: "Dashboard",
    content: [ { title: "Home", Route: "/" } ],
},

{
    title: "Configurações",
    content: [ { title: "Perfil", Route: "/perfil" } ],
},

{
    title: "Utilitários",
    content: [ { title: "Relatórios", Route: "/relatorios" } ],
},
]
export default function Sidebar({ isOpen, closeSidebar }){
    const[openIndex, setOpenIndex] = useState(null);
    const handleToggleItem = (Index) =>{
        setOpenIndex((prev) =>
        (prev === Index ? null : Index));
}
    return(
        <aside className={`sidebar ${isOpen ? "sidebar-open": ""}`}>
            <nav className='sidebar-nav'>
                {
                    items.map((item, Index) =>(
                        <div className='according-item' key={item.title}>
                            <button className='accordion-header'
                                onClick={()=> handleToggleItem(Index)}>
                                    <span>{item.title}</span>
                                    <span>{openIndex === Index ? "-": "+"}</span>
                            </button>
                            {
                                openIndex === Index && (
                                    <ul className='accordion-content'>
                                        {
                                            item.content.map((subitem)=>(
                                            <li key={subitem.title}>
                                                <Link to={subitem.route} className='accordion-link' onClick={closeSidebar}>{subitem.title}</Link>
                                            </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
                    ))
                }
            </nav>
        </aside>
    )
}