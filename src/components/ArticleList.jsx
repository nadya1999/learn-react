import React, {PureComponent, Component} from 'react';
import {render} from 'react-dom';
import Article from './Article.jsx';

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }
    render() {
        console.log('---', 2);
        
        const articleElements = this.props.articles.map( (article, index) => 
            <li className='article-list__li' key = {article.id}>
                <Article article = {article} 
                    isOpen = {this.state.openArticleId === article.id}
                    onButtonClick = {this.handleClick.bind(this, article.id)}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    handleClick = openArticleId => this.setState({ 
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })
}

