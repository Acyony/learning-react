import React, {useState, useContext} from 'react';
import {getData} from "../api";
import {StorageContext} from "../contexts";
import {doneAction, noDataAction} from "../actions";


function Search() {
    // To make inout controlled we need to use useState hook
    // and pass in an empty string as the initial value then
    // add onChange event handler to update the state and set value property to equal the value of the state
    const {setMainState} = useContext(StorageContext);
    const [searchWord, setSearchWord] = useState('');

    // create searchBtnClick event handler
    const searchBtnClick = async () => {
        const data = await getData(searchWord);
        if (data.results[0].hits.length) {
            setMainState(doneAction(data.results[0].hits));
        } else {
            setMainState(noDataAction(data.results[0].hits));
        }
    }

    return (
        <div className="row mt-3">
            <div className="col-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary"
                                type="button"
                                onClick={searchBtnClick}>
                            Search
                        </button>
                    </div>
                    <input type="text"
                           className="form-control"
                           placeholder="key word"
                           onChange={e => setSearchWord(e.target.value)}
                           value={searchWord}/>
                </div>
            </div>
        </div>
    );
}

export default Search;