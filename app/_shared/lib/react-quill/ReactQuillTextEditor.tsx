import dynamic from "next/dynamic";
const ReactQuillTextEditor = dynamic(() => import("react-quill"), {
  ssr: false,
});
import "react-quill/dist/quill.snow.css";
export default ReactQuillTextEditor;
