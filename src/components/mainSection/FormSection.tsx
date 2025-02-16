import "./formSection.css"

const FormSection = () => {

    const handleClick = (e:any)=>{
        e.preventDefault()
        console.log("Submitted")
    }

  return (
    <div className="formSection">
      <form>
        <div className="mb-3"><label htmlFor="description" className="form-label">Description : </label>
          <input id="description" type="text" className="form-control" />
        </div>

        <div className="mb-3"><label htmlFor="price" className="form-label">Price : </label>
          <input id="price" type="number" className="form-control" />
        </div>

        <div className="mb-3">
            <label className="form-label">Category : </label>
            <select className="form-select" defaultValue="1">
                <option >Select a category</option>
                <option value={"1"}>Grocery</option>
                <option value={"2"}>Utilities</option>
                <option value={"3"}>Hobbies</option>
            </select>
        </div>

        <button onClick={handleClick} className="btn btn-primary" type="submit">Submit</button>

      </form>
    </div>
  )
}

export default FormSection
