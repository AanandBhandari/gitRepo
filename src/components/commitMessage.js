import React from 'react';
import PropTypes from 'prop-types'
const CommitMessage = ({commit}) => {
    return (
        <td className="commit-message">
           {commit.message} 
        </td>
    )
}
CommitMessage.propsTypes ={ commit: PropTypes.object.isRequired };

 export default CommitMessage;