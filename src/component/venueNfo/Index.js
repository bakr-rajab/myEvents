import React from 'react';
import Zoom from "react-reveal/Zoom";

import locImg from '../../resources/images/icons/location.png';
import calImg from '../../resources/images/icons/calendar.png';

const VenueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom right duration={2000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon"
                                         style={{background:`url(${calImg})`}}
                                    ></div>
                                    <div className="vn_title">
                                        Event Date
                                    </div>
                                    <div className="vn_desc">
                                        258 Speer street Cairo,CA 9568
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom left duration={3000}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon"
                                         style={{background:`url(${locImg})`}}
                                    ></div>
                                    <div className="vn_title">
                                        Event Location
                                    </div>
                                    <div className="vn_desc">
                                        258 Speer street Cairo,CA 9568
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueNfo;
