# Jest Test Running

One thing that I wanted to accomplish with this file structure was a separation of concern between the various parts. There are many design decisions that often get overlooked or not enough time and practice are put into place to begin to really realize the pros and cons of any folder structure approach.

This is in part my concern with projects like "Ruby on Rails" because you can easily just go with what's out of the box. But if you don't practice doing things from the ground up you'll never know why it may be useful to have everything contained it's own folder, or when it's time maybe to create a whole new repository.

In this project case I separated the backend tests into it's own folder (the one you're in now). This sort of cleans up the code for the implementation itself. Without noisy neighbors next to the files I can just look at the code itself when I'm in there. It's a bit of folder hopping going between tests and live code, but I don't know that's it's really that harmful in the end.

Though, I think in most cases it makes sense to test the files right next to where you have the code itself, having a top level folder named Jest tells the world that this repository is Test Driven (TDD) area.

The testing we do here for any of the front end code will likely live inside their own workspace (folder) within this repo. These Jests are specifically for the core backend features. So in case we'd like to separate packing the files from serving the files in another folder, it may be beneficial to see all of those tests come together inside on folder to see a high level structure above it all.

## Getting Started

To test these files you will need to be in the root of the project. The [package.json](../package.json) will have some script there that says test. Have a look at it. The command is pretty simple: `jest --watch`. The watch means that it will only test files that have changed since the last run and continueously operate like any good TDD environment should.

You may also find the [jest.config.js](../jest.config.js). This is the standard config created when you run `npx ts-jest config:init` which has more information [here](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation/).
