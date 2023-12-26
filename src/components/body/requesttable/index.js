import { useEffect, useState } from "react"
import Separator from "../../common/separator";
import "./table.css";


function RequestTable() {
  const [products, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("http://asset-logistics-srv-env.eba-vfppbrqv.us-east-1.elasticbeanstalk.com/api/WasteBins", 
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
                       <img width="50px" height="50px"
            
                      src={require(`../../../assets/${user.type ? user.type : 'ALL'}.png`)}
          /> 
          <div>{user.location}</div>
                    </td>
                    <td>
                        <table>
                        <tr>
                        <td>{user.address} </td>
                        </tr>
                        <tr>
                        <td>{user.zipCode}</td>
                        </tr>
                        <tr>
                        <td>Fill Percentage : {user.fillPercentage} % </td>
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