import React from 'react'

const RowContainer = ({flag}) => {
    return (
        <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'} `}>
            <div className='min-w-350 w-350 h-20 bg-cardOverlay shadow-md backdrop-filter'>

            </div>
        </div>
    )
}

export default RowContainer