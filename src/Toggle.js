import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Toggle = () => {
    const [items, setItems] = useState([{
        letter: "S",
        key: 1
    },
    {
        letter: "e",
        key: 2
    },
    {
        letter: "a",
        key: 3
    },
    {
        letter: "n",
        key: 4
    }
    ]);

    const transition = useTransition(items, item => item.key, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })


    return (
        <div>
            test typing to see how bad lag is
            {transition.map(
                ({ item, key, props }) =>

                    <animated.h1 style={props}>{item.letter}</animated.h1>
            )
            }

            <button onClick={() => setItems([{
                letter: 'S',
                key: 1
            }])}>Toggle</button>
        </div>
    )
}
export default Toggle



// const transition = useTransition(isToggled, null, {
//     from: { opacity: 0, position: 'absolute' },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 }
// })



// <div
// style={{
//     position: 'relative'
// }}
// >
// {transition.map(
//     ({ item, key, props }) =>
//         item ? (<animated.h1 style={props}>Hello</animated.h1>
//         ) : (
//                 <animated.h1 style={props}>World</animated.h1>
//             )
// )}

// <button onClick={() => setToggle(!isToggled)}>Toggle</button>
// </div> 