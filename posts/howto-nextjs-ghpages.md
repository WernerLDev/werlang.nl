---
title: "Deploy static Next.js site to Github pages"
metaDesc: "I have built my website using Next.JS and host it on Github pages. Here's how I did it"
date: "2022-12-04"
draft: false
---

On Github it has been possible to host a simple static website for a long time already. By default Github uses Jekyll as static site generator. I have tried this out in the past and it works well for simple sites, but it is not the only way to host a website on Github.

In this blog post I want to explain how I am deploying a Next.JS application to Github pages.

### What is Next.JS?

Next.JS is a React framework that allows you to built websites and web applications using React. By default it comes with anything you need so no configuration or setup required. All you need to do to get started is run:

```
npx create-next-app@latest
```

#### The Export function

One of the many features it has is an export function. This feature will turn your Next.JS app into a static website. The export will execute all the `getStaticProps` functions inside your components and makes the output part of the Javascript bundle. This way there will be no API calls needed anymore during runtime.

The output of this export function is what I am hosting on Github pages.

### Setup git repository

Before we can deploy anything you will need to create a new repository first. The repository will need to have 2 branches.

1. main: This branch will contain our source code we work in
2. gh-pages: This branch will contain the compiled version of our site

After you have done that go to the `settings -> pages` of your repository.

![Screenshot if github settings page](/images/screenshot-ghpages.png)

On this page you can enable github pages by selecting a source branch and click `save`. As source branch select the branch `gh-pages`.

If the repository is still empty first create an empty Next.JS app using `npx create-next-app@latest` and push to the main-branch before proceeding.

### Setup Github workflow

This is where the magic happens. Github allows us to define build pipelines using Yaml files very similar to how pipelines work in Azure DevOps (for those who work with Azure DevOps at work).

Check out your repository locally and create the file `.github/workflows/gh-pages.yml` inside your repository.

My gh-pages workflow looks as following:

```
name: GitHub Pages deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1
      - name: Use Node.js 14.x
        uses: actions/setup-node@v1
        with:
          node-version: "14.x"

      - name: Run install
        uses: borales/actions-yarn@v4
        with:
          cmd: install # will run `yarn install` command

      - name: Build my App
        run: yarn build && yarn export && touch ./out/.nojekyll

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.0
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: out # The folder the action should deploy.
```

First this pipeline defines a trigger. The trigger will execute the build-pipeline everytime new changes are pushed to the main-branch.

Under jobs we can define multiple jobs. Right now there is only a build step that executes 4 steps.

1. Install node
2. Run yarn install
3. Compile and export Next.JS website
4. Deploy output to the branch `gh-pages`. (this should be the same branch you configured in the previous step).

Push this file to your main branch and you are done. It will now compile and build a Next.JS app (given that there is a Next.JS app in your main-branch)
