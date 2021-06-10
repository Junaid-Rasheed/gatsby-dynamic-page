import React from 'react'

export default function fruits({pageContext}) {
    
    return (
        <div>
            <h2>{pageContext.name}</h2>
 <h2>Description</h2>
            <p>{pageContext.description}</p>
        </div>
    )
}
