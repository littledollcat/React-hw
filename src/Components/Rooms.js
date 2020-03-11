import React from "react";

import DeluxeDoubleRoom from '../images/DeluxeDoubleRoom.jpg'
import DeluxeSingleRoom from '../images/DeluxeSingleRoom.jpg'
import DeluxeTwinRoom from '../images/DeluxeTwinRoom.jpg'
import DoubleRoom from '../images/DoubleRoom.jpg'
import singleRoom from '../images/singleRoom.jpeg'
import TwinRoom from '../images/TwinRoom.jpg'

export default function Rooms({ }) {
    return (
            <div className="rooms" >
                <div style={{width:'30%', textAlign: 'end', alignSelf: 'center'}}>
                    <h2>Rooms</h2>
                    <p>abcdefg</p>
                </div>
                <div className="rooms_images">
                    
                        <div className="image">
                            <img src={DeluxeDoubleRoom} alt="DeluxeDoubleRoom" />
                            <div className="image_text">DeluxeDoubleRoom</div>
                        </div>
                        <div className="image">
                            <img src={DeluxeSingleRoom} />
                            <div className="image_text">DeluxeSingleRoom</div>
                        </div>
                        <div className="image">
                            <img src={DeluxeTwinRoom} />
                            <div className="image_text">DeluxeTwinRoom</div>
                        </div>
                    
                        <div className="image">
                            <img src={DoubleRoom} />
                            <div className="image_text">DoubleRoom</div>
                        </div>
                        <div className="image">
                            <img src={singleRoom} />
                            <div className="image_text">singleRoom</div>
                        </div>
                        <div className="image">
                            <img src={TwinRoom} />
                            <div className="image_text">TwinRoom</div>
                        </div>
                    
                </div>
            </div>
        
    );
}
