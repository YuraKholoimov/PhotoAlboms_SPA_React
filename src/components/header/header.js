import style from './header.module.scss'

export default function Header() {
    return (
        <header className={style.header}>
                <div className={style.hamburger}>
                    <div className={style.top}></div>
                    <div className={style.ham}><a href="/AboutMe">Aboute me</a></div>
                    <div className={style.bur}><a href="">Alboms</a></div>
                    <div className={style.middle}></div>
                    <div className={style.ger}><a href="/Notice">Notice</a></div>
                    <div className={style.bottom}></div>
                </div>
        </header>
    )
}