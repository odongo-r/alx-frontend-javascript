# ES6 Basics

Welcome to the ES6 Basics project! This project is designed to help you understand and practice key features of ECMAScript 6 (ES6), a major update to JavaScript that introduces several new features and improvements.

## Project Structure

The project is organized into the following files:

## Tasks

### Task 0: `Const` or `Let`

- **Objective:** Modify the given functions to use `const` and `let` according to their usage.
- **Files to Modify:**
  - `0-constants.js`: Update the `taskFirst` function to use `const` and the `taskNext` function to use `let`.

#### Example

**Before:**

```
function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();
  return combination;
}```

**After:**

``export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
```

## Getting Started

Clone the Repository:

`git clone https://github.com/yourusername/es6-basics.git`

Navigate to the Project Directory:

`cd es6-basics`

Install Dependencies: If there are any dependencies listed in package.json, install them using:

`npm install`

Running the Code

To run the code, use Node.js with the provided entry point script:

Run the Code:

`npm run dev 0-main.js`

Expected Output:

```I prefer const when I can. But sometimes let is okay```

## Contributing
We welcome contributions to the ES6 Basics project! If you would like to contribute, please follow these steps:

Fork the Repository: Create a personal fork of the repository on GitHub.
Create a Branch: Make sure to create a new branch for your changes.
Make Changes: Implement your changes and ensure that your code follows ES6 standards.
Commit and Push: Commit your changes and push them to your fork.
Create a Pull Request: Open a pull request to merge your changes into the main repository.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


