import Button from "./Button";
import style from "./Card.module.css";

const Card = ({post}) => {
    const {image, title, content, tags, published} = post

    const setTagColor = tag => {
        switch (tag) {
            case "html":
                return style.html
            case "css":
                return style.css
            case "js":
                return style.js
            case "php":
                return style.php
            default:
                return style.default
        }
    }

    return (
        <>
            <div className={style.card}>
                <figure>
                    <img src={ image || "https://placehold.co/600x400" } alt="template-image" />
                </figure>
                <div className={style.cardBody}>
                    <h3>{ title }</h3>
                    <p>{ content }</p>
                    <div className={style.tagsWrapper}>
                        {tags.map((tag,index) => (
                            <span key={`tag-${index}`} className={`${setTagColor(tag)} ${style.singleTagBox}`}>{tag}</span>
                        ))}
                    </div>
                    <Button/>
                </div>

            </div>
        </>
    )
}

export default Card;