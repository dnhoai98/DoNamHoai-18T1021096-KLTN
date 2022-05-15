import InfoCovid from "../InfoCovid";
import Posts from "../Posts/Posts";

const Home = ({posts, setPostDetails}) => {
    return ( 
        <>
            <InfoCovid />
            <Posts posts={posts} setPostDetails={setPostDetails} />
        </>
     );
}
 
export default Home;