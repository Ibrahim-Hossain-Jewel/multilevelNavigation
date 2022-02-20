import React from "react";
import './service-collection.scss';
import consultationData from './AdvisoryData'
import PrintCollection from "../../view-colletion/view-collection.component";

class AdvisoryConsulting extends React.Component{
    constructor(){
        super();
        this.state = {
            consultationData
        }
    }
    //now pass all the data to the service preview
    render(){
        return(
            <div className="servicePoint">
                {
                    this.state.consultationData.map((collectionInfo)=>
                    <PrintCollection key = {collectionInfo.id} data = { collectionInfo } />
                    )
                }
            </div>
        );
    }
}
export default AdvisoryConsulting;