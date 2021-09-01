import React from 'react'
import { Link } from 'react-router-dom'
import Feedback from '../component/FeedBack'

export default function About() {
    return (
        <div>
            <div className="outer-content">
                <div className="inner-content">
                    <p>
                        Hello, I am Md  Tarique Ansari. I Full Stack MERN  developer.
                    </p>
                </div>
            </div>
            <Link to="/Tarique_Ansari"><button className="btn btn-primary">Back to Home</button></Link>
            <Feedback />
        </div>
    )
}
