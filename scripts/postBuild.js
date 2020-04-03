const fs = require("fs")
const path = require("path")
const { success, info, indent, log, warn, error } = require("cli-msg")
const { nl, tab } = indent
const { getDirectories } = require("./utils")

const BUILD_OUTPUT_FOLDER = "./build"

nl(1)
log("/".repeat(process.stdout.columns))
nl(1)
warn.b(" PRE-BUILD ")
nl(1)
info("BUILD FOLDER", BUILD_OUTPUT_FOLDER)
nl(1)

// Create the main index.js file

function getComponents() {
  let importStrings = []
  let componentNames = []

  const directoriesToCopyFrom = ["components"]

  directoriesToCopyFrom.forEach((directory, index) => {
    let folderNames = getDirectories(
      path.resolve(__dirname, `../build/${directory}`)
    )
    log(folderNames)
    nl(1)
    log("exports")

    folderNames.forEach(componentName => {
      const getExports = require(path.resolve(
        __dirname,
        `../build/${directory}/${componentName}`
      ))
      console.log(componentName, JSON.stringify(getExports, null, 4))
    })
  })
}

getComponents()
