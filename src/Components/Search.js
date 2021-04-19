import React from 'react'

function Search({ change, search }) {
    return (
        <div className="container mt-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search..." onChange={change} />
            {search}
        </div>
    )
}

export default Search
