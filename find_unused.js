/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

function getAllFiles(dir, files, result) {
    files = files || fs.readdirSync(dir);
    result = result || [];

    for (let i = 0; i < files.length; i++) {
        let file = path.join(dir, files[i]);
        if (fs.statSync(file).isDirectory()) {
            getAllFiles(file, fs.readdirSync(file), result);
        } else {
            result.push(file);
        }
    }
    return result;
}

const srcDir = path.join(__dirname, 'src');
const allFiles = getAllFiles(srcDir);

const fileContents = allFiles.map(f => ({
    path: f,
    content: fs.readFileSync(f, 'utf8')
}));

function isReferenced(fileToCheck) {
    let baseName = path.basename(fileToCheck);
    // Remove extension
    baseName = baseName.replace(/\.(tsx|ts|module\.css|css)$/, '');
    
    // For module.css, we can just check the baseName since it's like 'Contact' or 'Contact.module'
    if (fileToCheck.endsWith('.module.css')) {
        baseName = baseName.replace('.module', '');
    }

    for (const f of fileContents) {
        if (f.path === fileToCheck) continue;
        
        // Check if basename is in the file
        if (f.content.includes(baseName)) {
            return true;
        }
    }
    return false;
}

const specialFiles = ['page.tsx', 'layout.tsx', 'globals.css', 'robots.ts', 'sitemap.ts', 'next-env.d.ts'];

const unusedFiles = [];
for (const f of allFiles) {
    const base = path.basename(f);
    if (specialFiles.includes(base)) continue;
    
    if (!isReferenced(f)) {
        unusedFiles.push(f);
    }
}

console.log(JSON.stringify(unusedFiles, null, 2));
