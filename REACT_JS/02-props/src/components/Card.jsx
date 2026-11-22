import React from 'react'
import { Bookmark } from 'lucide-react';


const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <div className="card_top">
                <div className="card_top_img"><img src={props.img} alt="" /></div>
                <div className="card_top_save_btn"><button>Save <Bookmark /> </button></div>
            </div>
            <div className="card_center">
                <div className="card_center_company"><h4>{props.company} <span>5 days ago</span></h4></div>
                <div className="card_center_job"><h3>{props.job}</h3></div>
                <div className="card_center_job_type">
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
            <div className="card_bottom">
                <div className="card_bottom_cost">
                    <div className="card_bottom_cost_price"><h3>${props.price}/hr</h3></div>
                    <div className="card_bottom_cost_adrs"><p>{props.adrs}</p></div>
                </div>
                <div className="card_bottom_btn"><button>Apply Now</button></div>
            </div>
        </div>
    )
}

export default Card
