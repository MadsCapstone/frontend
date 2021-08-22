import React, {Component} from "react";

class Video extends Component{
    render() {
        return (
            <div className="project-video-div">
                <iframe
                    width="1120"
                    height="630"
                    src={"https://www.youtube.com/embed/KHuSE3ediKM"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        )
    }
}

export default Video