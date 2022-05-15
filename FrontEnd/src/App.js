import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import FormDeclare from './components/Header/FormDeclare/FormDeclare';
import FormSupport from './components/Header/FormSupport/FormSupport';
import FormRequest from './components/Header/FormRequest/FormRequest';
import PostDetails from './components/Posts/PostDetails';
import Home from './components/Home/Home';
import AdminPage from './components/AdminPage/AdminPage';
import AdminPosts from './components/AdminPage/AdminPosts';
import AdminDeclare from './components/AdminPage/AdminDeclare';
import AdminSupport from './components/AdminPage/AdminSupport';
import AdminRequest from './components/AdminPage/AdminRequest';
import AddPost from './components/AdminPage/AddPost';
import {useState, useEffect} from 'react';
import DeclareDetails from './components/AdminPage/DeclareDetails';
import SupportDetails from './components/AdminPage/SupportDetails';
import RequestDetails from './components/AdminPage/RequestDetails';
import EditPost from './components/AdminPage/EditPost';
import AdminLogin from './components/AdminPage/AdminLogin';

function App() {

    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState({});
    const [editPost, setEditPost] = useState({});
    const [declares, setDeclares] = useState([]); 
    const [declareDetails, setDeclareDetails] = useState({});
    const [supports, setSupports] = useState([]); 
    const [supportDetails, setSupportDetails] = useState({});
    const [requests, setRequests] = useState([]);
    const [requestDetails, setRequestDetails] = useState({});
    
    const getPosts = async () => {
        await fetch("https://localhost:44304/api/post")
        .then((response) => response.json())
        .then((data) => setPosts(data))
    }
    useEffect(() =>{
        getPosts();
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home posts={posts} setPostDetails={setPostDetails} />} />
                <Route path="/declare" element={<FormDeclare declares={declares} setDeclares={setDeclares} />} />
                <Route path="/support" element={<FormSupport supports={supports} setSupports={setSupports} />} />
                <Route path="/request" element={<FormRequest requests={requests} setRequests={setRequests} />} />
                <Route path="/postDetails" element={<PostDetails postDetails={postDetails} />} />    
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/adminpage" element={<AdminPage />} >
                    <Route path="" element={<AdminPosts posts={posts} setPosts={setPosts} setEditPost={setEditPost}/>} />
                    <Route path="addpost" element={<AddPost setPosts={setPosts} posts={posts} />} />
                    <Route path="editPost" element={<EditPost editPost={editPost} />} />
                    <Route path="declare" element={<AdminDeclare declares={declares} setDeclares={setDeclares} setDeclareDetails={setDeclareDetails}/>} />
                    <Route path="declareDetails" element={<DeclareDetails declareDetails={declareDetails} />} />
                    <Route path="support" element={<AdminSupport supports={supports} setSupports={setSupports} setSupportDetails={setSupportDetails}/>}/>
                    <Route path="supportDetails" element={<SupportDetails supportDetails={supportDetails} />} />
                    <Route path="request" element={<AdminRequest requests={requests} setRequests={setRequests} setRequestDetails={setRequestDetails}/>}/>
                    <Route path="requestDetails" element={<RequestDetails requestDetails={requestDetails} />} />
                </Route>               
            </Routes>            
            <Footer />
        </div>
    );
}

export default App;
