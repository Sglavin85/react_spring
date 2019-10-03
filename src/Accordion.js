import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import useMeasure from './UseMasure';


const Accordion = () => {

    const [on, toggle] = useState(false);
    const [bind, { height, top }] = useMeasure();
    const animation = useSpring({
        overflow: "hidden",
        height: on ? height + top * 2 : 0
    })
    return (
        <div>
            <button onClick={() => toggle(!on)}>Toggle</button>
            <animated.div style={animation}>
                <div  {...bind} className="accordion">
                    <p>Hellow. I'm in the accordion</p>
                </div>
            </animated.div>
        </div>
    )
}

export default Accordion
