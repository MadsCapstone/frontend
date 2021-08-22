import React, {Component} from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {Typography} from "@material-ui/core";
import markdown from "../assets/blog-post/blogpost.md"


class Blog extends Component{
        constructor(props) {
                super(props);
                this.state = {
                        blog:null,
                }
        }
        componentDidMount() {
                fetch(markdown)
                    .then((response) => response.text())
                    .then((text) => {
                        console.log(text)
                        this.setState({ blog: text })

                }).catch(error=>{
                    console.log(error)
                })
        }


        render() {
                return(
                    <div className={"blog-post-div"}>
                        <ReactMarkdown children={this.state.blog} rehypePlugins={rehypeRaw}>

                        </ReactMarkdown>
                    </div>
                )
        }
}

export default Blog