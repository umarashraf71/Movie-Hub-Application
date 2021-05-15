import React from 'react'

function ContainerFluid(props) {
    return (
        <div className="container-fluid" >
        {props.children}
    </div>
    )
}

export default ContainerFluid;
