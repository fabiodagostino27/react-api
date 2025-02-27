export const Form = (props) => {
    const formData = props.formData;
    const setFormData = props.setFormData;

    const handleField = (e) => {
        const {name, value} = e.target;
        
        if ([name] == "tags") {
            setFormData({
                ...formData,
                [name]: value.split(',').map((elem) => elem.trim()),
            })
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    }

    return (
        <div className="mb-2">
            <h2>Aggiungi Post</h2>
            <form onSubmit={props.addPost}>
                <div className="row mb-3">
                    <div className="col-4">
                        <label htmlFor="title" className="form-label">Titolo</label>
                        <input 
                            className="form-control"
                            placeholder="Scrivi il titolo del post"
                            type="text" 
                            name="title" 
                            id="title"
                            value={formData.title}
                            onChange={handleField} />
                    </div>
                    <div className="col-8">
                    <label htmlFor="tags" className="form-label">Tag</label>
                        <input 
                            className="form-control"
                            placeholder="Scrivi i tag separati da una virgola (Es. 'Dolci,Torte,Ricette al forno')"
                            type="text" 
                            name="tags" 
                            id="tags"
                            onChange={handleField} 
                            value={formData.tags} />
                    </div>
                </div>
                <label htmlFor="content" className="form-label">Contenuto</label>
                <textarea 
                    className="form-control" 
                    name="content" 
                    id="content"
                    value={formData.content}
                    onChange={handleField}></textarea>
                <button className="btn btn-primary mt-3" type="submit">Invio</button>
            </form>
        </div>
    )
}