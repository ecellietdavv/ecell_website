import React from 'react'

function Spinner() {
    return (
        <span className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full" role="status"/>
        </span>
    )
}

export default Spinner