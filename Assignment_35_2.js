/*
In the webTechs array check if Sass exists in the array and if it exists 
print 'Sass is a CSS preprocess'. If it does not exist add Sass to the 
array and print the array.
*/


const webTechs = ['HTML', 'CSS', 'Java', 'React', 'Tailwind'];

if(webTechs.includes('Sass')) {
    console.log();
    console.log("Sass is a CSS preprocesser");
    console.log();
} else {
    webTechs.push('Sass');
    console.log();
    console.log(webTechs);
    console.log();
}
