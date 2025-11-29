import LogoSenai from './assets/logo-senai.png';
import Login from './assets/login.svg';
import Pesquisa from './assets/search.svg';
import './styles.css';

export default function Header({onToggleMenu}){
    return (
        <div className='cabecalho'>
            <div className='pnl-esquerda'>
            <span className='icon-hamburger' onClick={onToggleMenu}></span>
            <img src={LogoSenai} alt="Logotipo do Senai" />
            </div>
            <div className='pnl-direita'>
            <span className='icon-login'></span>
            <span className='icon-search'></span>
            </div>
        </div>
    );
}