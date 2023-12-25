import { useEffect, useState } from "react"
import Separator from "../../common/separator";
import "./table.css";


function RequestTable() {
  const [products, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("http://asset-logistics-srv-env.eba-vfppbrqv.us-east-1.elasticbeanstalk.com/api/Vehicles", 
          {mode:'cors'}
          ).then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <Separator/>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Requests</h1>
           {/* <div className="container-table100">
          <table border={1} className="table100.ver1">
            <tr>
              <th>Product</th>
              <th>User Email</th>
              <th>Title</th>
              <th>Description</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Prioirty</th>
            </tr>
            {products.map(user => (
              <tr className="row100">
                <td>{user.product}</td>
                <td>{user.userdetails}</td>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td>{user.brand}</td>
                <td>{user.type}</td>
                <td>{user.priority}</td>

              </tr>
            ))}
          </table>
          </div>  */}

          <div>
            {products.map(user => (

              <div className="card">
                <br/>
                <table>
                  <tr>
                  <td width="150px">{user.type}</td>
                    <td><strong>{user.title} <span className={user.priority}>{user.priority}</span> </strong></td>
                  </tr>
                  <tr>
                    <td  width="100px" height="100px">
                      {/* <img src={require("../img/.png")}></img> */}
                       <img width="50px" height="50px"
            
                      src={require(`../../../assets/${user.brand ? user.brand : 'Serviceps'}.png`)}
          /> 
          <div>{user.licensePlate}</div>
                    </td>
                    <td>
                        <table>
                        <tr>
                        <td>{user.vin} </td>
                        </tr>
                        <tr>
                        <td>{user.make}</td>
                        </tr>
                        <tr>
                        <td>{user.Hilux} </td>
                        </tr>
                        <tr>
                        <td> Type: {user.type}</td>
                        </tr>
                        
                        
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

            ))}

          </div>
        </>
      )}

        <br />
        <br />
    </div>
  )
}

export default RequestTable