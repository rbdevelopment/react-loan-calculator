import React from 'react';

export default function ContainerBox(props) {
    return (
        <div className='m1'>
            {props.children}
        </div>
    );
}