import React from 'react';
import PropTypes from 'prop-types'
import FileName from './fileName'
const FileListItem = ({file}) => {
    return (
        <tr className="file-list-item" >
            <FileName file={file} /> 
             </tr>
    )
   
}
FileListItem.propTypes = { file: PropTypes.object.isRequired };
    
export default FileListItem;