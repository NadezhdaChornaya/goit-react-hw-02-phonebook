import React from 'react'

export const Filter = ({ value, onChangeFilter }) => {
    // const onHandleChangeFilter = e => {
    //     onChangeFilter(e.target.value)
    // }
    return (

        <>
            <h3>Find contacts by name</h3>
            <input name="filter" type="text" value={value} onChange={onChangeFilter}></input>
        </>
    )
}
