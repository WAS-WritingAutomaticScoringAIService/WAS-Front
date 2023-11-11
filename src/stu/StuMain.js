/* StuMain.js */
import React from "react";
import StuEditor from "./StuEditor"
import DuFinTask from "../comb/DuFinTask";

const StuMain = () => {
  return(
    <div className="StuMain">
        <div>
            <StuEditor />
            <DuFinTask />
        </div>
    </div>
  );
};

export default StuMain;