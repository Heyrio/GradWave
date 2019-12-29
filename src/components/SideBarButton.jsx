import React from 'react'

export default function SideBarButton(prop) {

    const { buttonName } = prop; 


    return (
        <div>
            <a href="#">{buttonName}</a>
        </div>
    )
}
