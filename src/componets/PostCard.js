import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const PostCard = ( {post, paginated} ) => {

    const location = useLocation();

    const postIndexRaw = location.pathname
    const postIndex = parseInt(postIndexRaw.replace("/posts/", ""))
    
    return (
        <Card style={!paginated ? {width:"50%", margin:"auto" }: null}>
            <Card.Body>
                <Card.Title>{paginated ? post.title : post[postIndex-1].title}</Card.Title>
                {!paginated ? <Card.Text>
                    {post[postIndex-1].body}
                </Card.Text>: <></>}

                {paginated ? <Link style={{position:"absolute",bottom: "0", right:"10px"}} to={`/posts/${post.id}`}>Read</Link> :
                <Link style={{position:"absolute",bottom: "0", right:"10px"}} to="/posts" >Go back</Link>}

            </Card.Body>
        </Card>
    )
}

export default PostCard
