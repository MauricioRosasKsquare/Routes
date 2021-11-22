import PostCard from "./PostCard"
import PaginationComp from "./PaginationComp"
import { useState } from 'react'
import { Navigate } from "react-router";



const PostsGrid = ( {posts} ) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        { (localStorage.getItem('authorized') === "1") ? (
        <>
        <div style={{paddingTop:"10px" ,display:"grid", gridTemplateColumns: "repeat(auto-fill, 250px)", justifyContent:"center", gap:"20px"}}>
            {currentPosts.map((post, i) => 
                <PostCard key={i} post={post} paginated={true}/>
            )}
            
        </div>
        <PaginationComp postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </>)
        : <Navigate to= "/" /> }
        </>
    )
}

export default PostsGrid
