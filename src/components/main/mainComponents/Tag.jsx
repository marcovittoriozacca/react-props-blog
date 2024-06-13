import style from "./Tag.module.css";

const Tag = ({children}) => {
    return (
        <h4 className={style.tag}>{ children }</h4>
    )

}
export default Tag;