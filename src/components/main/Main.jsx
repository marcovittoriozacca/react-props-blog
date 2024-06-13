import Card from "./mainComponents/Card";
import style from "./Main.module.css";
import postsDb from "../../db/posts.json";

const Main = () => {

    return (
        <>
        <main className={style.main}>
            <section className={style.cards}>
                <ul className={style.postsList}>
                {postsDb.map((post, index) => (
                    <li key={post.id}>
                        <Card 
                            post={post}
                        />
                    </li>
                ))}
                </ul>
                
            </section>
        </main>
        </>
    )
}

export default Main;