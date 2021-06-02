import { NavLink } from 'react-router-dom'
import style from './header.module.scss'

export default function Header() {
    return (
        <header className={style.header}>
                <div className={style.hamburger}>
                    <div className={style.top}></div>
                    <div className={style.ham}><NavLink to="/aboutMe" activeClassName={style.active}>Aboute me</NavLink></div>
                    <div className={style.bur}><NavLink to="/albom1" activeClassName={style.active}>Alboms</NavLink></div>
                    <div className={style.middle}></div>
                    <div className={style.ger}><NavLink to="/notice" activeClassName={style.active}>Notice</NavLink></div>
                    <div className={style.bottom}></div>
                </div>
        </header>
    )
}