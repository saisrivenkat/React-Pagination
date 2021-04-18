/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Pagination({ page, totallength, paginate, previous, next }) {
    const num = []
    for (let i = 1; i <= Math.ceil(totallength / page); i++) {
        num.push(i)
    }
    return (
        <div className="container text-end ms-auto">
            <nav aria-label="Page navigation example">
                <ul class="pagination">

                    <li onClick={() => previous()} class="page-item"><a class="page-link" alt="">Previous</a></li>
                    {num.map(num => {
                        return (
                            <li class="page-item">
                                <a onClick={() => paginate(num)} class="page-link" >{num}</a>
                            </li>
                        )
                    })}
                    <li onClick={() => next()} class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>


        </div>
    )
}

export default Pagination
