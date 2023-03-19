# Retrieve Github User Statistics Using GraphQL & Apollo Client

![Github Stats GraphQL](https://user-images.githubusercontent.com/16396664/226185179-3502d1e9-9bc5-4c53-a1a3-9f898f9f789e.png)

## Demo URL

[https://github-stats-graphql.vercel.app/](https://github-stats-graphql.vercel.app/)

## Setup

### Create Github Access Token

-   Go to your Github account -> settings -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token -> Generate new token (General Use) -> Give your token a name and select scopes. In my case, I have given it access to `public_repo` and `read:user` scopes.
-   Rename the `.env.example` file to `.env.local ` and replace the text on the right side of the = sign with your github access token.

### Get the code

Make sure you have Node JS installed. If you don't have it:

-   [Download it from nodejs.org](https://nodejs.org)
-   [Install it using NVM ](https://github.com/nvm-sh/nvm)
-   If you're on Mac, Homebrew is a good option too:

```
brew install node
```

Clone the repo:

```
git clone https://github.com/realstoman/github-stats-graphql.git
```

Open the project folder:

```
cd github-stats-graphql
```

Install packages and dependencies:

```
npm install
```

Start a local dev server at `http://localhost:3000`:

```
npm run dev
```

## Notes

-   Coming Soon [I'll be doing a screencast](https://www.youtube.com/c/realstoman). Soon I'll be uploading a video to my YouTube channel where I'll be going through the process of the form validations
-   Feel free to use it in your projects
-   Contributions are welcome
