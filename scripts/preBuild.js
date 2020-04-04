const rimraf = require("rimraf")
const fs = require("fs")
const path = require("path")
const { success, info, indent, log, warn, error } = require("cli-msg")
const { nl, tab } = indent
const { getDirectories } = require("./utils")

const BUILD_OUTPUT_FOLDER = "./build"
const LIB_ROOT = "./src"

nl(1)
log("/".repeat(process.stdout.columns))
nl(1)
warn.b(" PRE-BUILD ")
nl(1)
info("BUILD FOLDER", BUILD_OUTPUT_FOLDER)
nl(1)

rimraf.sync(BUILD_OUTPUT_FOLDER)
fs.mkdirSync(BUILD_OUTPUT_FOLDER)

const FILES_TO_COPY = ["package.json", "README.md", "LICENSE"]

FILES_TO_COPY.forEach((file, index) => {
  fs.copyFileSync(file, `${BUILD_OUTPUT_FOLDER}/${file}`)
  success.wb(`${file} copied`)
  if (index === FILES_TO_COPY.length - 1) getComponentDirectories()
})

// Create the main index.js file

function getComponentDirectories() {
  let importStrings = []
  let componentNames = []

  const directoriesToCopyFrom = ["components", "layout"]

  directoriesToCopyFrom.forEach((directory, index) => {
    let folderNames = getDirectories(`${LIB_ROOT}/${directory}`)

    folderNames.forEach((componentName) => {
      // importStrings.push(`import ${componentName} from './${directory}/${componentName}';`);
      importStrings.push(`export * from './${directory}/${componentName}';`)
      componentNames.push(`${componentName}`)
    })
    if (index === directoriesToCopyFrom.length - 1) {
      importStrings.push(`export * from './theme';`)
      importStrings.push(`export * from './theme/globalStyles';`)
      generateMainIndexFile(importStrings, componentNames)
    }
  })
}

function generateMainIndexFile(importStrings, componentNames) {
  // log(`${importStrings}`)
  nl(1)
  info("ROOT", LIB_ROOT)
  nl(1)

  log("Stormbreaker", `${componentNames.length} component folders detected`)
  nl(1)
  log.b(` FOLDERS `)
  componentNames.forEach((name) => {
    tab(1)
    log(name)
  })
  nl(1)

  // import
  fs.writeFileSync(
    path.resolve(LIB_ROOT, "index.js"),
    `${importStrings.join("\n")}\n`
  )

  // // export
  // fs.appendFileSync(path.resolve(LIB_ROOT, 'index.js'), `\nexport { \n`, function(err) {
  //     if (err) throw err;
  // });

  // fs.appendFileSync(
  //     path.resolve(LIB_ROOT, 'index.js'),
  //     `${componentNames.map(componentName => `\t${componentName},`).join('\n')}\n`,
  //     function(err) {
  //         if (err) throw err;
  //         console.log('Saved!');
  //     },
  // );

  // fs.appendFileSync(path.resolve(LIB_ROOT, 'index.js'), `}`, function(err) {
  //     if (err) throw err;
  // });
  success.wb("index.js generated for default exports")
  nl(1)
  log(".".repeat(process.stdout.columns))
  nl(1)
  warn.b(" BABEL ")
  nl(1)
}
