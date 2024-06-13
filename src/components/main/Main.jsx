import Card from "./mainComponents/Card";
import style from "./Main.module.css";
import {posts} from "../../db/posts.js";

const Main = () => {

    return (
        <>
        <main className={style.main}>
            <section className={style.cards}>
                <ul className={style.postsList}>
                {posts.map((post, index) => (
                    post.published && 
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