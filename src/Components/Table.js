/* eslint-disable array-callback-return */
import React from 'react'

function Table({ posts, search }) {
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

                    {posts.filter((post) => {
                        if (search === "") {
                            return post
                        }
                        else if (post.title.toLowerCase().includes(search.toLowerCase())) {
                            return post

                        }
                    }).map(post => {
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
