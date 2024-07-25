"use client";
import { DeltaStatic } from "quill";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "@/app/_features/document/styles/quill.css";
import ReactQuill, { Quill } from "react-quill";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

type Props = {
  defaultValue?: DeltaStatic;
};

const QuillTextEditor = ({ defaultValue }: Props) => {
  const quillRef = useRef<ReactQuill | null>(null);
  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      modules={{ toolbar: TOOLBAR_OPTIONS }}
      defaultValue={defaultValue}
      value={quillRef.current?.getEditor().getContents()}
      onChange={(value, delta) => {}}
    />
  );
};
export default QuillTextEditor;
