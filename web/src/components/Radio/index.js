/**
 * @module Radio
 *
 *  {'type': 'radio',
 *   'label': 'I am radio question text',
 *   'data': [
 *       {'value': '1', 'label': 'radio label 1'},
 *       {'value': '2', 'label': 'radio label 2'},
 *       {'value': '3', 'label': 'radio label 3'},
 *       ...
 *   ]
 *  }
 **/

// CSS
import styles from './style.css';

import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import $ from 'jquery';

import Question from '../Question/index';

class Radio extends PureComponent {

    componentDidMount() {
        $(this.refs.root).localize();
    }

    componentDidUpdate() {
        $(this.refs.root).localize();
    }

    render() {
        const { id, item, className } = this.props;
        return (
            <div ref="root" className={className}>
                <Question
                    id={id}
                    text={item.label}
                    required={item.required}
                />
                <div className={styles.radioGrp}>
                    {this._renderRadioItem()}
                </div>
            </div>
        );
    }

    _renderRadioItem() {
        const { id, item, onChangeHandle } = this.props;
        const items = item.data.map((itm, idx) => {
            const inputID = `radio_${id}_${idx}`;
            const val = itm.value ? itm.value : itm.label;
            const label = itm.label;
            return (
                <div
                    className={styles.radioItem}
                    key={idx}
                >
                    <input
                        id={inputID}
                        type="radio"
                        name={id}
                        value={val}
                        onChange={onChangeHandle}
                    />
                    <label htmlFor={inputID}>
                        {label}
                    </label>
                </div>
            );
        });
        return items;
    }

}

Radio.PropTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onChangeHandle: PropTypes.func.isRequired,
    className: PropTypes.string
};

Radio.defaultProps = {};

export default Radio;
