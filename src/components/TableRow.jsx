export const TableRow = (props) => {
    const {id, title, content, tags} = props.p;
    const {deletePost} = props;

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{content}</td>
            <td>{tags.join(", ")}</td>
            <td>
                <button className="btn btn-outline-danger" onClick={() => deletePost(id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    )
}