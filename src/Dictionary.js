import React from 'react';

const Dictionary = ({dictionary}) =>
    <dl className='Dictionary'>
        {Object.keys(dictionary).map((fieldName, i) => {
            if (dictionary[fieldName].length > 0) {
                return (
                    <React.Fragment>
                        <dt key={i}>{fieldName}</dt>
                        <dd>{dictionary[fieldName]}</dd>
                    </React.Fragment>
                )
            } else {
                return '';
            }
        })}
    </dl>

export default Dictionary;
