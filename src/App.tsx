import { useEffect, useState } from 'react'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [show, setShow] = useState(null)

  useEffect(() => {
    if(!show){
      const editorEl = document.querySelector("#editor")
      const previewEl = document.querySelector("#preview")

      if(editorEl && previewEl){
        editorEl.classList.remove("maximize")
        previewEl.classList.remove("maximize")
      }
      
    }else{
      const targetId = show
      const targetEl = document.querySelector(`#${targetId}`)
      if(targetEl){
        targetEl.classList.add("maximize")
      }
    }
  }, [show])

  const handleResize = (buttonName) => {
    console.log(buttonName)

    const targetId = buttonName

    if(!show){
      setShow(targetId)
    }else{
      setShow(null)
    }

    
  }

  const ResizeButton = ({ buttonName }) => {
    console.log(buttonName)
    return (
      <div className="resize">
        <button 
          type="button"
          id={`${buttonName}-button`}
          className="resize-button"
          onClick={() => handleResize(buttonName)}
        >
          <FontAwesomeIcon icon={show === null ? faMaximize : faMinimize} />
        </button>
      </div>
    )    
  }

  return (
    <>
    
      {(!show || show === "editor-wrapper") &&
        <div id="editor-wrapper">
          <div className="head">
            <div className="title-container">
              <span className="icon"><FontAwesomeIcon icon={faFreeCodeCamp} /></span>
              <span>Editor</span>
            </div>

            <ResizeButton buttonName="editor-wrapper" />
          </div>

          <div id="editor-input">
            <textarea
              id="editor"
            />
          </div>
        </div>
      }

      {(!show || show === "preview") &&
        <div id="preview">
          <div className="head">
            <div className="title-container">
              <span className="icon"><FontAwesomeIcon icon={faFreeCodeCamp} /></span>
              <span>Previewer</span>
            </div>

            <ResizeButton buttonName="preview" />
          </div>
        </div>
      }
    </>
  )
}

export default App
