import Actions from "./Action";

function Post({author, title, text}){
    return(
        <div>
        <article className="post">
            <h2>Еда</h2>
            <p className="post-text">Я люблю покушать</p>
            <p className="post-author">Автор: Vlad</p>
            <Actions />
        </article>

        <article className="post">
            <h2>Програмирование</h2>
            <p className="post-text">Я люблю писать код</p>
            <p className="post-author">Автор: SockRat</p>
            <Actions />
        </article>

        <article className="post">
            <h2>Животные</h2>
            <p className="post-text">Я люблю кошек и собак</p>
            <p className="post-author">Автор: Sofia</p>
            <Actions />
        </article>



            {/* <article className="post">
            <h2>{title}</h2>
            <p className="post-text">{text}</p>
            <p className="post-author">Автор: {author}</p>
            <Actions />
        </article> */}
        </div>

    )
}

export default Post;