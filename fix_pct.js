const fs = require('fs');
const file = 'public/assets/espaco_inovacao.svg';
let content = fs.readFileSync(file, 'utf-8');

// The sky colors identified from the file:
const skyColors = ['#a3b4d2', '#4c78be', '#7597ce', '#c8d2e5'];

skyColors.forEach(color => {
    const regex = new RegExp(`<path[^>]*fill="${color}"[^>]*/>`, 'gi');
    content = content.replace(regex, '');
});

fs.writeFileSync(file, content, 'utf-8');
console.log('Sky removed from ' + file);
