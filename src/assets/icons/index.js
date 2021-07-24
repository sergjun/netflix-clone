export {default as downloadIcon} from "./download.svg";
export {default as searchIcon} from "./search.svg"
export {default as playGroup} from "./playGroup.svg"
export {default as homeIcon} from "./home.svg"
export {default as plusIcon} from "./plus.png"
export {default as infoIcon} from "./info.png"
export {default as playButton} from "./play-button.png"
export {default as menuIcon} from "./menu.svg"

 export const getIcon = (filePath) => {
    const icon = require(`./${filePath}`).default
    return icon;
  }

