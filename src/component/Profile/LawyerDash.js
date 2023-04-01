import React from 'react'
import { Link } from 'react-router-dom'
import '../../asset/css/lawyerDash.css'

const LawyerDash = () => {
  return (
    <div>
      <div className="row dashboard-main" style={{ height: "auto !important", marginLeft: "0", marginRight: "0", }}>
        <div className="col-md-3">

          <div className="flex-column mb-4 nav nav-pills nav-pills-custom c myCol3" id="v-pills-tab" role="tablist"
            aria-orientation="vertical">
            <div className='dashb '>
              <Link className='dashbb ' to={"/dashboard"}><h1 >Dashboard</h1></Link>
            </div>
            <div className='dashb'>
              <Link className='dashbb' to={"/lawyer"}><h1 className='active'>Lawyer</h1></Link>
            </div>
            <div className='dashb'>
              <Link className='dashbb' to={"/profile"}><h1>Profile</h1></Link>
            </div>
            <div className='dashb'>
              <Link className='dashbb' to={"paymentHistory"}><h1>Payment History</h1></Link>
            </div>
            <div className='dashb'>
              <Link className='dashbb' to={"layout"}><h1>Layout</h1></Link>
            </div>
          </div>
        </div>

        <div className="col-md-9 myDisplay">
          <div className="profile myProf">

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="td">1</th>
                  <td className="td">Mark</td>
                  <td className="td">Otto</td>
                  <td className="td">mdo</td>
                  <td className="td">mdo</td>
                </tr>
                <tr>
                  <th scope="row" className="td">2</th>
                  <td className="td">Jacob</td>
                  <td className="td">Thornton</td>
                  <td className="td">fat</td>
                  <td className="td">fat</td>
                </tr>
                <tr>
                  <th scope="row" className="td">3</th>
                  <td  className="td">Larry the Bird</td>
                  <td className="td">twitter</td>
                  <td className="td">twitter</td>
                  <td className="td">fat</td>
                </tr>
                <tr>
                  <th scope="row" className="td">4</th>
                  <td  className="td">Larry the Bird</td>
                  <td className="td">twitter</td>
                  <td className="td">twitter</td>
                  <td className="td">fat</td>
                </tr>
                <tr>
                  <th scope="row" className="td">5</th>
                  <td  className="td">Larry the Bird</td>
                  <td className="td">twitter</td>
                  <td className="td">twitter</td>
                  <td className="td">fat</td>
                </tr>
                <tr>
                  <th scope="row" className="td">6</th>
                  <td  className="td">Larry the Bird</td>
                  <td className="td">twitter</td>
                  <td className="td">twitter</td>
                  <td className="td">fat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LawyerDash