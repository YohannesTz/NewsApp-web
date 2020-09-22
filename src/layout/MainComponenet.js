import React, {Component} from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import {Col} from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

class MainComponent extends Component {

    constructor() {
        super();
        this.state = {
            news: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.getNews();
    }

    render() {
        return(
            <div onScroll={this.getNews}>
                {this.state.news.map(news =>(
                    <NewsCard key={news.id} title={news.newsHeader} content={news.newsContent}/>
                ))}
            </div>
        );
    }



    getNews() {
        this.setState({ loading: true });
        axios.get(`http://localhost/news/`).then(res =>{
            this.setState({ news:[...this.state.news, ...res.data] });
            this.setState({ loading:false });
            console.log(this.state.news);
        });
    }
}
export default MainComponent;