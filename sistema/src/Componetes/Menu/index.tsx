
import "./style.css";
import {Link} from "react-router-dom"

export const Menu =  () => {
    return (
        
        <header>
            <h1 className="logo"> 30Praum</h1>
            <nav className='menu'>
                <ul>
                    <li>
                       <Link to = '/home'>Artistas</Link>
                    </li>

                    <li>
                    <Link to = '/contatos'>Agenda</Link>
                    </li>

                    <li>
                    <Link to = '/servicos'>Contatos</Link>
                    </li>

                </ul>
            </nav>
        </header>
        
    );
}