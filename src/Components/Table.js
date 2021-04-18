import React from 'react'

function Table({ posts }) {
    return (
        <div class="container ">
            <table class="table  table-striped">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Title</th>

                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => {
                        return (
                            <tr>
                                <th>{post.id}</th>
                                <th>{post.title}</th>
                            </tr>
                        );

                    })}

                </tbody>
            </table>


        </div>
    )
}

export default Table
