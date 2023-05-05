import React, { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/*begin::Content*/}
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        {children}
      </div>
      {/*end::Content*/}
    </>
  );
};

export default Content;
