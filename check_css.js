const fs = require('fs');

function checkFile(filePath) {
    console.log(`Checking ${filePath}...`);
    const content = fs.readFileSync(filePath, 'utf8');

    let openBraces = 0;
    let closeBraces = 0;
    let inComment = false;
    let errors = [];

    for (let i = 0; i < content.length; i++) {
        if (!inComment && content[i] === '/' && content[i + 1] === '*') {
            inComment = true;
            i++;
        } else if (inComment && content[i] === '*' && content[i + 1] === '/') {
            inComment = false;
            i++;
        } else if (!inComment) {
            if (content[i] === '{') openBraces++;
            if (content[i] === '}') closeBraces++;
        }
    }

    if (inComment) errors.push("Unclosed comment found!");
    if (openBraces !== closeBraces) errors.push(`Brace mismatch: ${openBraces} open, ${closeBraces} closed.`);

    if (errors.length > 0) {
        console.error(`Errors in ${filePath}:`, errors);
    } else {
        console.log(`${filePath} seems syntactically balanced.`);
    }
}

const files = [
    'd:/My Websites/interior duplicate/azim.hostlin.com/Archidom/assets/css/style.css',
    'd:/My Websites/interior duplicate/azim.hostlin.com/Archidom/assets/css/custom.css',
    'd:/My Websites/interior duplicate/azim.hostlin.com/Archidom/assets/css/color.css',
    'd:/My Websites/interior duplicate/azim.hostlin.com/Archidom/assets/css/responsive.css'
];

files.forEach(checkFile);
