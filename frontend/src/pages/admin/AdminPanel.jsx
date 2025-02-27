import React from "react";
import { useState } from "react";
import AddToken from "./AddToken/";
import AdminTokenList from "./AdminTokenList/";
import { RiAddBoxFill, RiAdminFill, RiFileList2Fill } from "@remixicon/react";

function AdminPanel() {
  const [idx, setIdx] = useState(0);
  const [component, setComponent] = useState();
  const controlsCSS =
    "flex items-center justify-center pb-4 min-w-full min-h-36 border-[0.01px] border-gray-800 bg-primary-light rounded-xl ";

  return (
    <div>
      <div
        id="controls"
        className="min-w-40 h-[681px] max-h-screen absolute gap-[30px] p-1 bg-secondary-light text-gray-900 text-9xl flex flex-col items-center justify-between"
      >
        <div
          id="0"
          onClick={() => {
            setComponent(<AdminTokenList />);
          }}
          className={controlsCSS}
        >
          <RiFileList2Fill size={60} />
        </div>
        <div
          id="1"
          onClick={() => {
            setComponent(<AddToken />);
          }}
          className={controlsCSS}
        >
          <RiAddBoxFill size={60} />
        </div>
        <div
          id="2"
          className={controlsCSS}
        >
          <RiAdminFill size={60} />
        </div>
      </div>
      <div
        id="actions"
        className="bg-primary-light w-full min-h-screen h-fit flex justify-center"
      >
        <div className="w-full pl-64 ">{component}</div>
      </div>
    </div>
  );
}

export default AdminPanel;
