import css from './Header.module.css'
function Header(){
    return(
        <header>
            <div className={css.header}>
                <h1 className={css.titulo}>Caça-Medos</h1>
                <p className={css.frase}>Cace ou seja caçado nesta noite de terror.</p>
            </div>
        </header>
    )
}

export default Header