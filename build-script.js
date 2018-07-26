const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        //'./dist/inline.bundle.js',
        './dist/angular-elements-test/runtime.js',
        './dist/angular-elements-test/polyfills.js',
        './dist/angular-elements-test/main.js'
      
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/beat-application.js')
    await fs.copyFile('./dist/angular-elements-test/styles.css', 'elements/styles.css')
    console.info('Angular element created .. ');
    
})()

