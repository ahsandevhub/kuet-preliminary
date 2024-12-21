# Mofa’s Kitchen Buddy

This guide will walk you through setting up and running the Node.js server.

## Prerequisites

Before running the server, make sure you have the following installed:

- **Node.js** (Version 14.x or above)
- **npm** (Node Package Manager)

You can download and install Node.js from [here](https://nodejs.org/).

## Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/ahsandevhub/kuet-preliminary.git
cd challenge-2
```

## Install Dependencies

Once inside the project directory, run the following command to install the necessary dependencies:

```bash
npm install
```

This will install all dependencies listed in the `package.json` file.

## Configuration

Make sure to configure your environment variables, such as API keys or database connection strings, in a `.env` file inside `challenge-2` folder. Here's an example:

```bash
# .env
PORT=5000

MONGO_URI=

OPENAI_API_KEY=
```

## Run the Server

Once dependencies are installed and configurations are set up, you can start the server with the following command:

```bash
nodemon server.js
```

This will start the server on the default port (e.g., 5000).

## Accessing the Server

By default, the server will be available at:

```
http://localhost:5000
```

If you configured a different port, make sure to update your request URL accordingly.

## Troubleshooting

- **Missing dependencies**: Run `npm install` to install the necessary packages.
- **Server not starting**: Make sure that the `.env` file is configured correctly and that the server port is not already in use.

## Stopping the Server

To stop the server, press `Ctrl + C` in the terminal window where the server is running.

---

This file can be modified according to the specific details of your project (e.g., specific dependencies, custom scripts, etc.).
