import React from 'react';
const FileIcon = ({file}) => {
    let icon = 'fa-file-text-o'; 
    if (file.type === 'folder') { 
        icon = 'fa-folder'; 
    }
    return (
        <td className="file-icon">
         <i className={`fa ${icon}`} />
        </td>
    )
}
 const FileName = ({file}) => {
    return (
        <React.Fragment>
            <FileIcon file={file} />
            <td className="file-name">{file.name}</td>
        </React.Fragment>
        
    )
 }
 export default FileName;