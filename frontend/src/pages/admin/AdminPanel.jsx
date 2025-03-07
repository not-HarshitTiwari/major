import React from "react";
import {Outlet, useNavigate} from "react-router";
import { RiAddBoxFill, RiAdminFill, RiFileList2Fill } from "@remixicon/react";

function AdminPanel() {
  const navigate = useNavigate();
  const controlsCSS =
    "flex items-center justify-center pb-4 min-w-full min-h-36 border-[0.01px] border-gray-800 bg-primary-light rounded-xl dark:bg-primary-dark dark:text-primary-text-dark";
  
  return (
    <div className="flex">
      <div
        id="controls"
        className="w-40 h-screen fixed left-0 top-0 gap-[30px] px-4 pt-24 pb-12 text-9xl flex flex-col items-center justify-between bg-secondary-light text-gray-900 dark:bg-secondary-dark"
      >
        <div
          id="0"
          onClick={() => {
            navigate("./")
          }}
          className={controlsCSS}
        >
          <RiFileList2Fill size={60} />
        </div>
        <div
          id="1"
          onClick={() => {
            navigate("./add-token")
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
        <div className="w-full pl-64 dark:bg-primary-dark">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
