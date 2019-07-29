import React from "react";
import Slider from "react-slick";
import Zoom from "react-reveal/Zoom";
import slide01 from '../../resources/images/slide_one.jpg';
import slide02 from '../../resources/images/slide_two.jpg';
import slide03 from '../../resources/images/slide_three.jpg';
import Fade from "react-reveal/Fade";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    focusOnSelect: true
};

class Carrousel extends React.Component {
    state={
        slide:[{text:'welcome there01',bgimg:slide01},
            {text:'welcome there02',bgimg:slide02},
            {text:'welcome there03',bgimg:slide03}
        ]
    };
    renderSlide=()=>{
        return this.state.slide.map((slide,id)=>{
            return (
                <div key={id}>
                    <Fade Slide play when={true} delay={800}>
                        <div className="carrousel_image"
                             style={{
                                 background: `url(${slide.bgimg})`,
                                 height: `${window.innerHeight}px`

                             }}
                        >
                        </div>
                    </Fade>
                    <div style={{
                        position: 'relative'
                        , top: '-300px'
                    }}>
                        <div className="artist_name">
                            <Zoom>
                                <div className="wrapper">
                                    {slide.text
                                    // +console.log(slide.text)
                                    }
                                </div>
                            </Zoom>
                        </div>
                    </div>

                </div>
            );
        })
    }
    // componentDidMount() {
    //     this.renderSlide()
    // }

    render() {


        return (
            <div className='carrousel_wrapper'
                 style={{
                     overflow: "hidden",
                     height: `${window.innerHeight}px`
                 }}
            >
                <Slider {...settings} >
                    {this.renderSlide()}
                </Slider>

            </div>
        );
    }
}

export default Carrousel;