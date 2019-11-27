import React, {Component, PureComponent} from 'react';
import {render} from 'react-dom';

class Article extends PureComponent {
/*
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }

    } 
*/

    //experimental 
    state = {
        count: 0
    }

/* 
    componentWillReceiveProps(nextProps){
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }
 */

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className='card-text' style={{color: 'green'}}>{article.text}</section>
        return (
            <div className='card mx-auto' style={{width: '70%'}}>
                <div className='card-header' style={{color: 'blue'}}>
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button className='btn btn-primary float-right' onClick={onButtonClick}>
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className='card-body'>
                    <h6 className='card-subtitle text-muted'>
                        creation date:{(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>    
        )
    }

    /* experimental */

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

}

export default Article;