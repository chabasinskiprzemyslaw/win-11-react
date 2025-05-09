import React from "react";
import { useSelector } from "react-redux";
import "./tabs.scss";
import "./tabs2.scss";
import "./wnapp.scss";

export * from "./apps/about";
export * from "./apps/calculator";
export * from "./apps/camera";
export * from "./apps/discord";
export * from "./apps/explorer";
export * from "./apps/getstarted";
export * from "./apps/notepad";
export * from "./apps/settings";
export * from "./apps/taskmanager";
export * from "./apps/terminal";
export * from "./apps/whiteboard";
export * from "./apps/chrome";
export * from "./apps/whatsapp";
export * from "./apps/socialmedia";
export * from "./apps/antivirus";
export * from "./apps/recyclebin";

export const ScreenPreview = () => {
  const tasks = useSelector((state) => state.taskbar);

  return (
    <div className="prevCont" style={{ left: tasks.prevPos + "%" }}>
      <div className="prevScreen" id="prevApp" data-show={tasks.prev && false}>
        <div id="prevsc"></div>
      </div>
    </div>
  );
};
