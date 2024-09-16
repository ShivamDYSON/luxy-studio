// import React, { useRef, useState, useEffect } from 'react';
// import Draggable from 'react-draggable';

// const ManipulationBox = ({ elements = [], setElements }) => {
//     const elementRefs = useRef({}); // Store refs for each element

//     // Ensure every element has a ref
//     elements.forEach((el) => {
//         if (!elementRefs.current[el.id]) {
//             elementRefs.current[el.id] = React.createRef();
//         }
//     });

//     const handleDragStop = (id, data) => {
//         setElements((prevElements) =>
//             prevElements.map((el) =>
//                 el.id === id ? { ...el, position: { x: data.x, y: data.y } } : el
//             )
//         );
//     };

//     const rotateElement = (id, direction) => {
//         setElements((prevElements) =>
//             prevElements.map((el) =>
//                 el.id === id ? { ...el, rotation: el.rotation + (direction === 'cw' ? 15 : -15) } : el
//             )
//         );
//     };

//     const scaleElement = (id, factor) => {
//         setElements((prevElements) =>
//             prevElements.map((el) =>
//                 el.id === id ? { ...el, scale: Math.max(0.1, el.scale * factor) } : el
//             )
//         );
//     };

//     const deleteElement = (id) => {
//         setElements((prevElements) => prevElements.filter((el) => el.id !== id));
//     };

//     return (
//         <div className="manipulation-box">
//             {elements.map((el) => (
//                 <Draggable
//                     key={el.id}
//                     nodeRef={elementRefs.current[el.id]}
//                     position={{ x: el.position.x, y: el.position.y }}
//                     onStop={(e, data) => handleDragStop(el.id, data)}
//                 >
//                     <div
//                         ref={elementRefs.current[el.id]}
//                         style={{
//                             transform: `rotate(${el.rotation}deg) scale(${el.scale})`,
//                             position: 'absolute',
//                             cursor: 'move',
//                             color: el.color,
//                             fontSize: `${el.size || 16}px`,
//                             fontFamily: el.font || 'Arial',
//                             fontWeight: el.fontWeight || 'normal',
//                             fontStyle: el.fontStyle || 'normal',
//                             textAlign: el.align || 'left',
//                             whiteSpace: 'nowrap',
//                             zIndex: 1,
//                         }}
//                     >
//                         {el.type === 'image' && (
//                             <img
//                                 src={el.src}
//                                 alt="Uploaded"
//                                 className="manipulable-item"
//                                 style={{
//                                     width: '150px',
//                                     height: '150px',
//                                     transform: `rotate(${el.rotation}deg) scale(${el.scale})`,
//                                 }}
//                             />
//                         )}

//                         {el.type === 'text' && (
//                             <p>{el.content}</p>
//                         )}

//                         {el.type === 'textArt' && (
//                             <p
//                                 style={{
//                                     WebkitTextStrokeWidth: `${el.stroke}px`,
//                                     WebkitTextStrokeColor: 'black',
//                                 }}
//                             >
//                                 {el.content}
//                             </p>
//                         )}

//                         <div className="controls">
//                             <button onClick={() => rotateElement(el.id, 'cw')}>⟳</button>
//                             <button onClick={() => rotateElement(el.id, 'ccw')}>⟲</button>
//                             <button onClick={() => scaleElement(el.id, 1.1)}>➕</button>
//                             <button onClick={() => scaleElement(el.id, 0.9)}>➖</button>
//                             <button onClick={() => deleteElement(el.id)}>🗑</button>
//                         </div>
//                     </div>
//                 </Draggable>
//             ))}
//         </div>
//     );
// };

// export default ManipulationBox;


import React, { useRef, useEffect } from 'react';
import Draggable from 'react-draggable';

const ManipulationBox = ({ elements = [], setElements }) => {
    const elementRefs = useRef({}); // Store refs for each element

    // Ensure every element has a ref
    elements.forEach((el) => {
        if (!elementRefs.current[el.id]) {
            elementRefs.current[el.id] = React.createRef();
        }
    });

    // Handle drag event for real-time positioning
    const handleDrag = (id, data) => {
        setElements((prevElements) =>
            prevElements.map((el) =>
                el.id === id ? { ...el, position: { x: data.x, y: data.y } } : el
            )
        );
    };

    // Handle drag stop event
    const handleDragStop = (id, data) => {
        setElements((prevElements) =>
            prevElements.map((el) =>
                el.id === id ? { ...el, position: { x: data.x, y: data.y } } : el
            )
        );
    };

    // Rotate the element
    const rotateElement = (id, direction) => {
        setElements((prevElements) =>
            prevElements.map((el) =>
                el.id === id
                    ? { ...el, rotation: el.rotation + (direction === 'cw' ? 15 : -15) }
                    : el
            )
        );
    };

    // Scale the element (resize)
    const scaleElement = (id, factor) => {
        setElements((prevElements) =>
            prevElements.map((el) =>
                el.id === id ? { ...el, scale: Math.max(0.1, el.scale * factor) } : el
            )
        );
    };

    // Delete the element
    const deleteElement = (id) => {
        setElements((prevElements) => prevElements.filter((el) => el.id !== id));
    };

    // Adjust controls dynamically based on element size and transformation
    const getControlStyles = (el) => {
        const size = 150 * el.scale;
        return {
            topLeft: {
                position: 'absolute',
                top: `-${20}px`,
                left: `-${20}px`,
                transform: `rotate(${el.rotation}deg)`,
            },
            topRight: {
                position: 'absolute',
                top: `-${20}px`,
                right: `-${20}px`,
                transform: `rotate(${el.rotation}deg)`,
            },
            bottomRight: {
                position: 'absolute',
                bottom: `-${20}px`,
                right: `-${20}px`,
                transform: `rotate(${el.rotation}deg)`,
            },
            bottomLeft: {
                position: 'absolute',
                bottom: `-${20}px`,
                left: `-${20}px`,
                transform: `rotate(${el.rotation}deg)`,
            },
            centerBottom: {
                position: 'absolute',
                bottom: `-${20}px`,
                left: `50%`,
                transform: `translateX(-50%) rotate(${el.rotation}deg)`,
            },
        };
    };

    return (
        <div className="manipulation-box">
            {elements.map((el) => (
                <Draggable
                    key={el.id}
                    nodeRef={elementRefs.current[el.id]}
                    position={{ x: el.position.x, y: el.position.y }}
                    onDrag={(e, data) => handleDrag(el.id, data)} // Real-time drag positioning
                    onStop={(e, data) => handleDragStop(el.id, data)} // Final position on stop
                >
                    <div
                        ref={elementRefs.current[el.id]}
                        style={{
                            transform: `rotate(${el.rotation}deg) scale(${el.scale})`,
                            position: 'absolute',
                            cursor: 'move',
                            color: el.color,
                            fontSize: `${el.size || 16}px`,
                            fontFamily: el.font || 'Arial',
                            fontWeight: el.fontWeight || 'normal',
                            fontStyle: el.fontStyle || 'normal',
                            textAlign: el.align || 'left',
                            whiteSpace: 'nowrap',
                            zIndex: 1,
                        }}
                    >
                        {el.type === 'image' && (
                            <img
                                src={el.src}
                                alt="Uploaded"
                                className="manipulable-item"
                                style={{
                                    width: `${150 * el.scale}px`,
                                    height: `${150 * el.scale}px`,
                                    transform: `rotate(${el.rotation}deg)`,
                                }}
                            />
                        )}

                        {el.type === 'text' && (
                            <p
                                style={{
                                    transform: `rotate(${el.rotation}deg) scale(${el.scale})`,
                                    display: 'inline-block',
                                }}
                            >
                                {el.content}
                            </p>
                        )}

                        {el.type === 'textArt' && (
                            <p
                                style={{
                                    transform: `rotate(${el.rotation}deg) scale(${el.scale})`,
                                    WebkitTextStrokeWidth: `${el.stroke}px`,
                                    WebkitTextStrokeColor: 'black',
                                    display: 'inline-block',
                                }}
                            >
                                {el.content}
                            </p>
                        )}

                        {/* Control buttons positioned around the corners */}
                        <div className="controls" style={{ position: 'relative', width: '100%' }}>
                            {/* Top-left corner */}
                            <div style={getControlStyles(el).topLeft}>
                                <button onClick={() => rotateElement(el.id, 'cw')}>⟳</button>
                            </div>
                            {/* Top-right corner */}
                            <div style={getControlStyles(el).topRight}>
                                <button onClick={() => rotateElement(el.id, 'ccw')}>⟲</button>
                            </div>
                            {/* Bottom-right corner */}
                            <div style={getControlStyles(el).bottomRight}>
                                <button onClick={() => scaleElement(el.id, 1.1)}>➕</button>
                            </div>
                            {/* Bottom-left corner */}
                            <div style={getControlStyles(el).bottomLeft}>
                                <button onClick={() => scaleElement(el.id, 0.9)}>➖</button>
                            </div>
                            {/* Center-bottom for delete */}
                            <div style={getControlStyles(el).centerBottom}>
                                <button onClick={() => deleteElement(el.id)}>🗑</button>
                            </div>
                        </div>
                    </div>
                </Draggable>
            ))}
        </div>
    );
};

export default ManipulationBox;
