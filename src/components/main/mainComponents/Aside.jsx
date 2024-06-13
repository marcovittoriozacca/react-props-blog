import { posts } from "../../../db/posts.js";
import style from "./Aside.module.css";
import Tag from "./Tag.jsx";

const Aside = () => {

    let tags = new Set();

    posts.forEach(e => {
        e.tags.forEach(t => tags.add(t));
    });
    tags = [...tags];

    return(
        <>
            <aside className={`${style.asideWrapper}`}>
                <ul>
                    {tags.map((m, index) => (
                        <li key={`asideTag-${index}`}>
                            <Tag>
                                {m}
                            </Tag>
                        </li> 
                    ))}
                </ul>
            </aside>
        </>
    )


}
export default Aside;