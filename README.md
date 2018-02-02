# Azure Naming Conventions test tool


[![MIT license](https://img.shields.io/npm/l/express.svg)](https://github.com/andikrueger/AzureNamingConventions/blob/master/LICENSE)

Azure has many different naming rules and restrictions. These [Naming conventions](https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions) can break your ARM deployments. This library helps to determine if a name is applyable for the resource type in mind.

# Installation

Other than manually downloading and building this library, **azure-naming-conventions** is available in the following options.

## Build it

Download the master branch and run the following command to build the library:

`npm run build`

This will output the compiled sources in the */dist* folder. You can copy this folder to your project.

## NPM
Install the library via NPM:

`npm install azure-naming-conventions --save`

# Usage

To use **azure-naming-conventions** in your project, you will need to add a reference to the module:

```const AzureNamingConventions = require('azureNamingConventions')

// Create a new Azure Naming Conventions Object
var example = AzureNamingConventions.NamingConvention("teststring", AzureNamingConventions.NamingConventionRule.VirtualMachineWindows);
var result = example.validate();

// Output the result
if(result.isValid) {
  console.log('Name is valid');
} else {
  console.log('Please make sure to fulfill the following Azure Naming Convention Rules: ' +
               result.toString());
}
```

# Think you found a bug

First chech the [issues](https://github.com/andikrueger/azure-naming-conventions/issues) list to see if someone else has already found it. If not, create an issue and provide some details on how to reproduce this bug.
