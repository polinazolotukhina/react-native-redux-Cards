import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import SelectionReduser from './SelectionReduser';


export default combineReducers({
    libraries: libraryReducer,
    selectedLibraryId: SelectionReduser
});
