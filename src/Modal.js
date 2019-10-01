import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';

const Modal = ({ closeModal, animation }) => {
    return (
        <animated.div style={animation} className="modal">
            <div className="modal-card">
                <h1>Modal</h1>
                <button onClick={closeModal}>Close</button>
            </div>
        </animated.div>
    )
}

const ModalWrapper = () => {
    const [isModalVisible, setModalVis] = useState(false);
    const transition = useTransition(isModalVisible, null, {
        from: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
        enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        leave: { opacity: 0, transform: "translate3d(0, -40px, 0)" }
    })
    return (
        < div >
            {
                transition.map(
                    ({ item, key, props: animation }) =>
                        item && <Modal animation={animation} closeModal={() => setModalVis(!isModalVisible)} />
                )
            }
            <button onClick={() => setModalVis(!isModalVisible)}>Open</button>
        </div >
    )
}


export default ModalWrapper
