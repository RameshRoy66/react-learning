import React from 'react'

export default function Props(props) {
  return (
    <div>
        <h1>hi ra {props.name}</h1>
            {props.children}
            <Props2 name='suresh' />
    </div>
  )
}

function Props2({name}) {
    return(
        <div>
                hi babai {name}
        </div>
    )

}