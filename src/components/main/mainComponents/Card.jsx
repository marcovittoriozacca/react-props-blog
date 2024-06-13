import Button from "./Button";
import style from "./Card.module.css";

const Card = ({post}) => {
    const {image, title, content, link} = post
    return (
        <>
            <div className={style.card}>
                <figure>
                    <img src={ image } alt="template-image" />
                </figure>
                <div className={style.cardBody}>
                    <h3>{ title }</h3>
                    <p>{ content }</p>
                    <Button
                        link={link}
                    />
                </div>

            </div>
        </>
    )
}

export default Card;