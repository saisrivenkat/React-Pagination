import React from 'react'

const Dropdown = ({ change, value }) => {
    const style = {
        width: "auto"
    }
    return (
        <div className="container mt-5" style={style} >
            <select className="form-select" aria-label="Default select example" value={value} onChange={change}>
                <option selected value="10">10</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="100">100</option>
            </select>
        </div>
    );
}
export default Dropdown