import React from 'react'
import '../asset/css/panel.css'
import '../asset/css/dashboard.css'
import '../asset/css/lawyer.css'
import '../asset/css/profile.css'
import '../asset/css/menuzord.css'
import '../asset/css/main.css'
import bgTeam from '../asset/images/img/bg-team1.jpg'

const Slider = (props) => {
  return (
    <>
    <section className="page-title-area error-page-title-bg" style={{ backgroundImage: `url(${bgTeam})` }}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-padding">
                        <div className="page-title-content text-center">
                            <p>{props.pHome}</p>
                            <h2>{props.h2Home}</h2>
                        </div>
                        <div className="breadcrumbs text-center">
                            <ul className="page-breadcrumbs">
                                <li><a href="#">{props.a1Home}</a></li>
                                <li><a href="#">{props.a2Home}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default Slider