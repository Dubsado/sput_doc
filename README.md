# SPUT_DOC

## Introduction

Maintaining documentation is a challenging endeavor. Yes, there are VS_Code extensions for Markdown (.md) files. There are site generators for creating documentation. Yet many of these solutions are either time consuming, inflexible, or just all round hard to maintain. This is where SputDoc comes in to play. With our built in admin dashboard and handy CLI tools, you can take any existing codebase and turn it into a self documenting joy to use.

## Features

### Admin Dashboard

This is where you can fire up with the web view of the file editor & file explorer.

- [editor](./editor/)

### File Search API

You can utilize these utilities in your backend to work with the different types of files that any project may have.

- [getFiles.ts](./packer/getFiles.ts) -> get all files in a directory, or filter them
- [getFiles.test.ts](./jest/getFiles.ts)
