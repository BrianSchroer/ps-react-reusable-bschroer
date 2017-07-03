var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
    examples: path.join(__dirname, '../src', 'docs', 'examples'),
    components: path.join(__dirname, '../src', 'components'),
    output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = (process.argv.slice(2) == '--watch');

if (enableWatchMode) {
    const pathsToWatch = [paths.examples, paths.components]; 
    console.log(chalk.magenta('Watching for changes to:\n' + pathsToWatch.join('\n')));
    // Regenerate component metadata when components or examples change:
    chokidar.watch(pathsToWatch).on('change', function(path) {
        console.log(chalk.magenta(`File updated: ${path}`));
        generate(paths);
    })
} else {
    // Generate component metadata:
    generate(paths);
}

function generate(paths) {
    var errors = [];

    var componentData = getDirectories(paths.components).map(function(componentName) {
        var cdata = {};
        try {
            cdata = getComponentData(paths, componentName);
        } catch(error) {
            const errorMessage = 'An error occurred while attempting to generate metadata for ' + componentName + '. ' + error;
            console.log(chalk.red(errorMessage));
            errors.push(errorMessage);   
        }
        return cdata;
    });

    writeFile(paths.output, 'module.exports = ' + JSON.stringify((errors.length) ? errors : componentData));
}

function getComponentData(paths, componentName) {
    var content = readFile(path.join(paths.components, componentName, componentName + '.js'));

    var info = parse(content);

    var examples = [];

    try {
        examples = getExampleData(paths.examples, componentName);          
    } catch (error) {
        const errorMessage = 'An error occurred while attempting to get example data for ' + componentName + '. ' + error;
        console.log(chalk.red(errorMessage));
    }

    return {
        name: componentName,
        description: info.description,
        props: info.props,
        code: content,
        examples: examples 
    };
}

function getExampleData(examplesPath, componentName) {
    var exampleFiles = getExampleFiles(examplesPath, componentName);

    return exampleFiles.map(function(file) {
        var filePath = path.join(examplesPath, componentName, file);
        var content = readFile(filePath);
        var info = parse(content);

        return {
            name: file.slice(0, -3), // remove .js extension
            description: info.description,
            code: content
        };
    });
}

function getExampleFiles(examplesPath, componentName) {
    var exampleFiles = [];

    try {
        exampleFiles = getFiles(path.join(examplesPath, componentName));
    } catch(error) {
        console.log(chalk.yellow(`No examples found for ${componentName}.`));
    }

    return exampleFiles;
};

function getDirectories(filePath) {
    return fs.readdirSync(filePath).filter(function(file) {
        return fs.statSync(path.join(filePath, file)).isDirectory();      
    });
}

function getFiles(filePath) {
    return fs.readdirSync(filePath).filter(function(file) {
        return fs.statSync(path.join(filePath, file)).isFile();      
    });
}

function writeFile(filePath, content) {
    fs.writeFile(filePath, content, function(err) {
        (err) ? console.log(chalk.red(err)) : console.log(chalk.green('Component data saved.'));
    });
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}
