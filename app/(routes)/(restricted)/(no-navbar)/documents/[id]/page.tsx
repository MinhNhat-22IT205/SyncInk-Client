import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const DoucumntPage = () => {
  const QuillTextEditor = useMemo(() => {
    return dynamic(
      () => import("@/app/_features/document/components/quill/QuillTextEditor"),
      {
        loading: () => <p>loading...</p>,
        ssr: false,
      },
    );
  }, []);
  return (
    <div className="bg-gray-100">
      <QuillTextEditor />
    </div>
  );
};

export default DoucumntPage;
