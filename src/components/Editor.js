import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
/** Text editor - we can control the code editor with our own onchange */
import { Controlled as ControlledEditor } from "react-codemirror2-react-17";

const Editor = ({ displayName, language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>0/C</button>
      </div>
      <ControlledEditor
        /**similar to onChange */
        onBeforeChange={handleChange}
        value={value}
        className="code mirror wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
