import React from 'react'

export const Summary = ({quality, personality, experience, motherhood}) => {

    return (
        <>
        <h1>Here is the summary</h1>
        <p>Quality: { quality } </p>
        <p>Personality: { personality }</p>
        <p>Experience: { experience }</p>
        <p>Motherhood {motherhood ? "Is great!" : "Noo, mothers are just home with sick kids."}</p>
        </>
    )
}