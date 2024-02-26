import { useEffect, useState } from "react"
import Separator from "../../common/separator";
import "./tasks.css";


function TaskList() {
  const [products, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("http://asset-logistics-srv-env.eba-vfppbrqv.us-east-1.elasticbeanstalk.com/api/Task", 
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
          <h1>Tasks</h1>
          <div>
           

              <div className="card">
                <table>
                    <tr>
                        <td></td>
                        <td><strong>Task Number</strong></td>
                        <td><strong>Bin Id</strong></td>
                        <td><strong>Vehicle</strong></td>
                        <td><strong>Date</strong></td>
                        <td><strong>Status</strong></td>
                        <td><strong>Completed At</strong></td>
                        <td><strong>Action</strong></td>
                    </tr>
                    {products.map(task => (
                        <tr>
                                <td  width="100px" height="100px">
                                    <img width="50px" height="50px"
                                        src={require(`../../../assets/TRUCK_${task.status ? task.status : 'NEW'}.png`)} /> 
                                </td>
                                <td><strong>{task.taskId} </strong></td>
                                <td>{task.bin}</td>
                                <td>{task.vin}</td>
                                <td>{task.date}</td>
                                <td>{task.status}</td>
                                <td>{task.complatedAt}</td>
                                <td><button>View Route</button></td>
                        </tr>
                     ))}
                </table>
              </div>
          </div>
        </>
      )}

        <br />
        <br />
    </div>
  )
}

export default TaskList