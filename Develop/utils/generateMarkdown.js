// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license) {
      return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ','_')}-yellow.svg)`
  }
  return ""
}


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license) {
      return `[Click here for more information](https://opensource.org/licenses/${license.replace(' ','-')})`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
{
  if (license) {
      return `This project is cover under the license type ${license}
      `
  }
  return ""
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
## Installation
${data.installInstructions}
## Usage
${data.usageInfo}
## Contribution
${data.contributionGuideline}
## Test
${data.testInstructions}
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Questions
[GitHub Repo](https://github.com/${data.gitHubUserName})
email: ${data.email}
`;
}

module.exports = generateMarkdown;