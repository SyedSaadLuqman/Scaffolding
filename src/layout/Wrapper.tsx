import React, { Children, ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/*begin::Wrapper*/}
      <div
        className="wrapper d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        {children}
      </div>
      {/*end::Wrapper*/}
    </>
  );
};

export default Wrapper;
