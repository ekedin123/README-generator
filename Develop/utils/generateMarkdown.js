// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license != "None") {
    badge = `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "MIT": link = "https://mit-license.org/%22"; break;
    case "IBM": link = "https://www.ibm.com/about/software-licensing/us-en"; break;
    default: link = ""; break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != "None") {
    licenseSection += `## License \n`
    licenseSection += `Click [Here](${renderLicenseLink(license)}) for License Information`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseBadge(data.license)} \n
  ## Description \n
  ${data.description}\n
  ## Table of Contents\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributors](#contributors)\n
  [Tests](#tests)\n
  [License](#license)\n
  [Questions](#questions)\n
  ## Installation\n
  ${data.installation}\n
  ## Usage \n
  ${data.usage}\n
  ## Contributors \n
  ${data.contributors}\n
  ## Tests \n
  ${data.tests}\n
  ${renderLicenseSection(data.license)}\n
  ## Questions \n
  Any Questions? Contact me on GitHub or email
  https://github.com/${data.github} \n
  ${data.email}`;
}

module.exports = generateMarkdown;
