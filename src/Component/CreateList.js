import React from 'react';

const CreateList = ({ Message, onChange, onCreate}) => {
    return (
        <div id='title'>
            <p>to do list</p>
            <input name='Message' value={Message} onChange={onChange}/>
            <button onClick={onCreate}>+</button>
        </div>
    );
};

export default CreateList;