export const TableRow = (props) => {
    const {id, title, content, tags} = props.p;

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{content}</td>
            <td>{tags.join(", ")}</td>
        </tr>
    )
}