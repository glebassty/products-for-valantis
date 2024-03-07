import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto p-4">{children}</div>;
};

export default Container;
