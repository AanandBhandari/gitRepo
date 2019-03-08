import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileList from './components/fileList';
import testFile from './data/testFile';
ReactDOM.render(<FileList files={testFile}/>, document.getElementById('root'));
