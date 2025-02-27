import { Form } from "./Form";
import { TableRow } from "./TableRow";
import { useState, useEffect } from "react";

export const Main = () => {
    const endpoint = "http://localhost:3000/posts/api";    
    const [posts, setPosts] = useState([]);
    
    const emptyPost = {
        id:"",
        title: "",
        content: "",
        image: "",
        tags: []
    }
    
    const [formData, setFormData] = useState(emptyPost);

    const fetchPosts = () => {
        fetch(endpoint)
            .then((res) => res.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error))
    };

    const deletePost = (postId) => {
        fetch(endpoint + "/" + postId, {method: "DELETE" })
            .then(fetchPosts)
            .catch(err => console.error(err))
    };

    const addPost = (e) => {
        e.preventDefault();
        console.log(formData)

        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(fetchPosts)
    }
    
    useEffect(fetchPosts, []);

    return (
        <main className="container">
            <Form emptyPost={emptyPost} formData={formData} setFormData={setFormData} addPost={addPost} />

            <h2>Post</h2>
            <table className="table table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Titolo</th>
                        <th scope="col">Contenuto</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(p => <TableRow key={p.id} p={p} deletePost={deletePost} />)
                    }
                </tbody>
            </table>
        </main>
    )
}