import { useState } from "react"

const GridSection = () => {

    const [isValid, setIsValid] = useState(true)

const handleValidate = (e: any)=>{
    e.preventDefault()
    console.log(e)
}
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button onClick={handleValidate} disabled={!isValid} className="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><button onClick={handleValidate} disabled={!isValid} className="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default GridSection
