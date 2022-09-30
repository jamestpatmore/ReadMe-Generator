function renderLicenseBadge(license) {
let badge = '';
if (license === 'MIT License') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
} else if (license === 'Apache License 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
} else if (license === 'GNU Genral Public License v3.0') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
} else {
    badge = ''
}
return badge; 
}
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink = '';
if (license === 'MIT License') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
} else if (license === 'Apache License 2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
} else if (license === 'GNU Genral Public License v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
} else {
    licenseLink = ''
}
return licenseLink; 
}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
function renderLicenseSection(license) {
let licenseSection = '';
if(license === 'None') {
    licenseSection = ''
} else {
    licenseSection = 
    `License: ${license}`
}
return licenseSection;
}
  
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}

## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
### ${renderLicenseLink(data.license)}
  
## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [Contribution](#contributing)
# Installation
${data.installation}
# Description
${data.description}
# Usage
${data.usage}
# Contribution
${data.contributing}
  
# Contact
* Github :${data.git}
* LinkedIn :${data.linkedIn}
* E-Mail :${data.email}`
  
;
}
  
module.exports = generateMarkdown
  
