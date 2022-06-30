import React from 'react';

const ListMessage = ({List}) => {
    return (
        <div id='List1'>
            <div id='ListMessage'>
                {List.Message}
            </div>
            <div id='ListBtn'>
                <button>
                    삭제
                </button>
            </div>
        </div>
    );
};

const ListPss = ({List}) => {
    return(
        <div>
            {List.map(List=><ListMessage List={List}/>)}
        </div>
    )
}

export default ListPss;