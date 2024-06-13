import style from "./Button.module.css";

const Button = ({link}) => {
    return(
        <>
            <a href={link} target="_blank">
                <button className={style.button}>leggi di più</button>
            </a>
        </>
    )
}

export default Button;