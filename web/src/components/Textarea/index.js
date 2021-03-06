/**
 * @module Textarea
 *
 *  {'type': 'textarea',
 *   'label': 'I am multiple line text'
 *  }
 **/

// CSS
import styles from './style.css';

import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import $ from 'jquery';

import Question from '../Question/index';

class Textarea extends PureComponent {

    componentDidMount() {
        $(this.refs.root).localize();
    }

    componentDidUpdate() {
        $(this.refs.root).localize();
    }

    render() {
        const { id, item, onChangeHandle, className } = this.props;
        const rows = item.rows ? item.rows : 3;
        return (
            <div ref="root" className={className}>
                <Question
                    id={id}
                    text={item.label}
                    required={item.required}
                />
                <div>
                    <textarea
                        id={`textarea_${id}`}
                        rows={rows}
                        className={styles.textarea}
                        onChange={onChangeHandle}
                    />
                </div>
            </div>
        );
    }

}

Textarea.PropTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onChangeHandle: PropTypes.func.isRequired,
    className: PropTypes.string
};

Textarea.defaultProps = {};

export default Textarea;
