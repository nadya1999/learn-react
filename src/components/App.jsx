import React, {PureComponent} from 'react';
import {render} from 'react-dom';

import ArticleList from './ArticleList.jsx';
import articles from '../js/fixtures';


class App extends PureComponent {
    state = {
        reverted: false
    }

    render() {
        console.log('---', 1, this.state);
        
        return (
            <div className='container'>
                <div className='jumdotron'>
                    <h1 className='display-3'>
                        App name
                        <button className='btn' onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App;

