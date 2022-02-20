import React from "react";
import PrintCollection from '../../view-colletion/view-collection.component';
import CloudDB from "./CloudData";
import './CloudServices.styles.scss';
class CloudService extends React.Component{
    constructor(){
        super();
        this.state = {
           CloudDB
        }

    } //end constructor brace

    render(){
        return(
            <div className="servicePoint">
                {
                    this.state.CloudDB.map(
                        (allData)=>{
                            return(
                                <PrintCollection
                                    key = {allData.id}
                                    data = {allData}
                                />
                            )
                        }
                    )
                }
            </div>
        )
    }
}
export default CloudService;