import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Grid from "@mui/material/Grid";
export default function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    //     <div>
    //     <div style={{ border: "1px solid black",marginLeft:"-16px", marginTop:"-1.5%",minHeight:'400px'}}>
    //       <Editor
    //         editorState={editorState}
    //         onEditorStateChange={setEditorState}
    //       />
    //     </div>
    //   </div>
    // <Grid
    //   sx={{
    //     minHeight: "400px",
    //     border: 1,
    //     marginLeft: "-1.7%",
    //     marginTop: "-2%",
    //   }}
    // >
    //   <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    // </Grid>

    <Editor editorState={editorState} onEditorStateChange={setEditorState} />
  );
}
