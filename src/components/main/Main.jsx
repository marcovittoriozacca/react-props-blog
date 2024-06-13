import Card from "./mainComponents/Card";
import Aside from "./mainComponents/Aside.jsx";
import style from "./Main.module.css";
import {posts} from "../../db/posts.js";

const Main = () => {

    return (
        <>
        <main className={style.main}>
            <Aside/>
            <section className={style.cards}>
                <ul className={style.postsList}>
                {posts.map((post, index) => (
                    post.published && 
                    <li key={`postElement-${post.id}`}>
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