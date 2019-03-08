import React, { Component } from 'react';
import './App.css';
const FileList = ({file})=> {
  return (
    {file}
  )
}
const testFile = [
  {
    id : 1,
    name : 'Aanand'
  },
  {
    id: 2,
    name: 'Mr. Smith'
  },
  {
    id: 3,
    name: 'Helloworld'
  }
]

export default FileList(testFile);
// module.export.testFile
