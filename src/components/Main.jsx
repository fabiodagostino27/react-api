import { TableRow } from "./TableRow";
import { useState, useEffect } from "react";

export const Main = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        fetch("http://localhost:3000/posts/api")
            .then((res) => res.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error))
    };

    useEffect(fetchPosts, []);

    return (
        <main className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titolo</th>
                        <th scope="col">Contenuto</th>
                        <th scope="col">Tag</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(p => <TableRow key={p.id} p={p} />)
                    }
                </tbody>
            </table>
        </main>
    )
}