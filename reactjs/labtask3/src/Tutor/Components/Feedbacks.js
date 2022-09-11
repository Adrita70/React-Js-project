import React from 'react';
import Navbar from '../Navigation/Navbar';

const Feedbacks=({ jobs, loading })=>
{
    if (loading)
    {
        return(
            <div>
                <Navbar/>
                <h1 align="center">Loading...</h1>
                <br/><br/>
            </div>
        )
    }

    return(
        <div>
            <Navbar/>
            <h1 align="center">Feedbacks</h1>
            <br/>
            {
                jobs.map((st)=>(
                    <div style={{marginLeft: '120px', marginRight: '120px', border: "5px solid black", fontSize: "22px"}}>
                        <p align="center">
                            Feedback ID: {st.feed_id}
                            <br/><br/>
                            <textarea name="feedback" rows = "10" cols = "75" disabled>{st.feedback}</textarea><br/>
                            <br/>
                            Rating: {st.rating}/5
                            <br/><br/>
                        </p>
                    </div>
                ))
            }
            <br/><br/>
        </div>
    )
}
export default Feedbacks;