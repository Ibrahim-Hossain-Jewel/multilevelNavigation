import React, {useState} from "react";
import { IoIosArrowForward } from 'react-icons/io';
import './TopMenu.component.scss';
import AdvisoryConsulting from "../services-collections/advisoryConsulting/AdvisoryConsulting.component";
import CloudService from '../services-collections/cloudService/CloudServices.component';

export default function TopMenu (){
    const [rightside, setrightside] = useState(false);
    //first component;
    // const [first, setfirst] = useState(false);
    // const [second, setsecond] = useState(false);
    //use one state instead of multiple state;
    const [active, setactive] = useState({
        first: false,
        second: false,
    });
    //now make handler for update each event
    // eslint-disable-next-line no-unused-vars
    const firsthandler = ()=>{
        setactive(()=>{
            return {
                first: !active.first,
                second: false,
            }
        })
        
    }
    // eslint-disable-next-line no-unused-vars
    const secondhandler = ()=>{
        setactive(()=>{
            return {
                first: false,
                second: !active.second
            }
        })
    }

    return(
        <div className="topMenu">
            <div className="main-menu">
                <div className="logoside">
                    Logo
                </div>
                <div className="centerside">
                    <ul>
                        <li onClick={()=> setrightside(!rightside)} >
                            Solutions
                        </li>
                        <li>
                            Industries
                        </li>
                        <li>
                            Discover
                        </li>
                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="rightside">
                    OtherProps
                </div>
                {/*This portion for dropdown menu*/}
                
            </div>
            <div className={`contentDiv ${rightside ? 'dropdownoff' : null }`}>
                <div className="dropdown-card showDropdown" >
                    <ul className="sub-menu">
                        <li onClick={ firsthandler } className = {active.first ? 'is-active' : null} id="man">Avisory & Consulting <IoIosArrowForward />
                            <div className={`component ${active.first ? 'showComponent' : null}`}>
                                <AdvisoryConsulting />
                            </div>
                        </li>
                        <li onClick={ secondhandler } className = {active.second ? 'is-active' : null }> Cloud Services
                            <IoIosArrowForward />
                            <div className={`component2 ${active.second ? 'showComponent2': null }`} >
                                <CloudService />
                            </div>
                        </li>
                        <li>Contact Center
                            <IoIosArrowForward />
                        </li>
                        <li>Customer Experience
                            <IoIosArrowForward />
                        </li>
                        <li>Data Analytics
                            <IoIosArrowForward />
                        </li>
                        <li>Data Center
                            <IoIosArrowForward />
                        </li>
                        <li>Data Center
                            <IoIosArrowForward />
                        </li>
                        <li>Data Center
                            <IoIosArrowForward />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    ) //end of the return

}