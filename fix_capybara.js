const fs = require('fs');
const file = 'public/assets/capivara.svg';
let content = fs.readFileSync(file, 'utf-8');

const bgColors = ['#e0e6f3', '#edf1fa', '#f7f9fd', '#cfd4e4', '#b2bad2', '#baaaa4', '#ffffff'];

bgColors.forEach(color => {
    const regex = new RegExp(`<path[^>]*fill="${color}"[^>]*/>`, 'gi');
    content = content.replace(regex, '');
});

fs.writeFileSync(file, content, 'utf-8');
console.log('Background removed from ' + file);
