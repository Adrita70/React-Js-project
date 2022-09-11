import React, { useState, useEffect } from 'react';
import MyJobs from './MyJobs';
import Pagi from './Pagi';
import axiosConfig from './axiosConfig';

const PagMyJobBoard = () =>
{
    const[jobs,setJobs] = useState([]);
    var tutor_id = localStorage.getItem('id');
    
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    useEffect(() => 
    {
        var data = {tutor_id:tutor_id};
        const fetchPosts = async () =>
        {
            setLoading(true);
            const res = await axiosConfig.post("/tutormyjobs", data);
            setJobs(res.data.data);
            setLoading(false);
        };
      
        fetchPosts();
    },
    []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
    <div>
        <MyJobs jobs={currentPosts} loading={loading}/>
        <Pagi
            postsPerPage={postsPerPage}
            totalPosts={jobs.length}
            paginate={paginate}
        />
    </div>
    );
};

export default PagMyJobBoard;