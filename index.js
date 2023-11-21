const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      message: 'Briefly describe your project.',
      name: 'description',
    },
    {
      type: 'list',
      message: 'Which license would you like to use for this project?',
      name: 'license',
      choices: ['MIT', 'GPLv3', 'AGPL'],
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },    
  ])
  .then((data) => {
    const {name, description, license, github, email} = data;
    
    if (license == 'GPLv3') {
        var indefiniteArticle = 'a';
    } else indefiniteArticle = 'an';

    var badge = (license) => {
        if (license == 'MIT') {
            return '[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)';
        } else if (license == 'AGPL') {
            return '[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
        } else return '[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)';
    }

    fs.writeFile('README.md', 
`# ${name}

${badge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati et repudiandae at, accusantium distinctio repellat assumenda molestias quia officiis beatae! Beatae tempora eveniet pariatur sapiente quam laudantium, hic sunt?


## Usage

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati et repudiandae at, accusantium distinctio repellat assumenda molestias quia officiis beatae! Beatae tempora eveniet pariatur sapiente quam laudantium, hic sunt?

## License

This project uses ${indefiniteArticle} ${license} license.

## Contributing

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati et repudiandae at, accusantium distinctio repellat assumenda molestias quia officiis beatae! Beatae tempora eveniet pariatur sapiente quam laudantium, hic sunt?

## Tests

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati et repudiandae at, accusantium distinctio repellat assumenda molestias quia officiis beatae! Beatae tempora eveniet pariatur sapiente quam laudantium, hic sunt?

## Questions

If you have any questions for me, feel free to contact me on github at [${github}](https://www.github.com/${github}).

If you'd prefer, you can also email me at [${email}](mailto:${email}).
`
    , (err) => (err) ? console.error(err) : console.log('Writing README!'))
    });

// var install = "``bash \nnpm install my-project\ncd my-project```";
// var usage = "``javascript\nimport Component from 'my-project'\n\nfunction App() {\n\treturn <Component />\n}```";
