import { remote } from "electron"
const dialog = remote.dialog

import { settingsChangeCloneDestination } from "./settings-change-clone-destination"

const showPickDestinationDialog = () => {
  return new Promise((resolve, reject) => {
    return dialog.showOpenDialog({
      properties: ["openDirectory"]
    }, (paths) => {
      if (paths !== undefined) {
        resolve(paths[0])
      } else {
        resolve(paths)
      }
    })
  })
}

export const settingsChangeDestinationWithDialog = () => {
  return (dispatch, getState) => {
    showPickDestinationDialog().then((path) => {
      if (path) {
        dispatch(settingsChangeCloneDestination(path))
      }
    })
  }
}
