import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import '../sections/static/Notes.css';

const Notes = () => {
  const [content, setContent] = useState('');

  const handleModelChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      <FroalaEditor
        model={content}
        onModelChange={handleModelChange}
        // Add additional configuration options here
      />
    </div>
  );
};

export default Notes;
