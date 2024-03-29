---
title: "🐙 How to publish docker images as github packages to the Github container registry"
date: "2021-11-19"
imageSource: "github_registry"
alt: "Someone frustrated"
---

## Background

I am relatively new to docker. However, this post is less about what docker is, and more a walkthrough containing my notes on how to host docker images on the Github container registry (GHCR), and then push those images to GitHub packages.

Like the docker registry, the GitHub container registry is a repository for container images made through a containerization platform like Docker. In a nutshell, instead of deploying images to docker's container registry docker hub, in this walkthrough, we'll be using the GitHub container registry, which can be found at [ghcr.io](https://ghcr.io). I am making this post because, although lots of these steps are already documented online, I still ran into some roadblocks doing this myself, either through poor documentation or no documentation at all.

## Prerequisites

There are a few basic pre-requisites for doing this, including but not limited to:

1) Installing docker on your machine
2) `docker login` to log into docker from the command line (this also assumes you have a docker account)
3) Having a project with a git repository initialized and hosted on GitHub
4) Having a Dockerfile successfully building an image of your project

## Setting up a personal access token

From here, the first thing you need to do is set up a Github PAT, otherwise known as a personal access token. PATs are currently the best-supported way to authenticate with GitHub on your local machine (previously you had to use your email and password). Because the GHCR is a GitHub product, you're going to need this to log into the GHCR with it.

There are some good instructions on how to do this here. In the scopes section, select `read:packages`, `write:packages`, and `delete:packages` options. There are other scopes you can select that probably wouldn't affect accomplishing the tasks in this walkthrough, but those are the required scopes.

## Logging into the container registry

The next step involves signing in to the container registry service. Enter this command in a fresh terminal:

`docker login -u <GITHUB-USERNAME> -p <GITHUB-PAT-YOU-JUST-MADE> ghcr.io`

There are a few variations of this online, including some with the echo command in front of it, which is strange because all this does is display the text of whatever argument the command takes.

Some variations included the `--password-stdin` flag instead of the `-p` flag. The only difference in using the `--password-stdin` flag is that you'd need to enter your PAT token manually instead of in-line in the command. The method I use with the `-p` flag is more straightforward and also avoids a potential pitfall of not being able to enter a PAT, such as in a GitHub action.

Nevertheless, this should be all you need to get to the `login successful` screen.

## Deploying an image to GitHub packages

I'm assuming at this step you have an image already created that you'd like to deploy. For this example, let's assume I want to deploy an image I have created named `project_1`.

One important concept to cover before deployment is how to *re-name* images, as you probably care about the name of your deployed package, as well as the version (this is done through tags). 

Running the command `docker images` should give you a list of all of the images you have on your machine, including, in my case, `project_1`. If I want to rename `project_1` to something more exciting, like `mason/my-awesome-app`, I would type the following:

`docker image tag project_1:latest mason/my-awesome-app:latest`

The `tag` command is used to give a version to the image ('latest' is pretty common, but it can be something like `v1`). If I *did* want to call it `v1` instead of `latest`, I'd say:

`docker image tag project_1:latest mason/my-awesome-app:v1`

This assumes `project_1` already has a tag of `latest`, which it probably does as it's the default tag that Docker adds when it builds images. For this example, we'll keep the tag as `latest`.

With that, let's finally deploy our image to GitHub's package repository. 

`docker push ghcr.io/mason/my-awesome-app:latest`

And that's it! If you head to the GitHub repository that package is in, and select `packages`, you should see something like this.

![Image of the package screen](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0486add1-19e5-4db8-bc64-f2e10e6ec3d9/package.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211122T143630Z&X-Amz-Expires=86400&X-Amz-Signature=6b0a6edf3e7ee2732232f9aaf2337893e804c08f645d64d7266b653768cf3e51&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22package.png%22&x-id=GetObject)_GitHub's package manager screen_

Clicking on the package will take you to the page for viewing your package publicly.

![Image of the registry](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/680670fb-5c75-4604-839e-f1fd8bbf71a2/my_awesome_app.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211122T143613Z&X-Amz-Expires=86400&X-Amz-Signature=0a0f4848961ad14e0b45d279384123f8c86365eb4f8325f0750e38dceaec0bd4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22my_awesome_app.png%22&x-id=GetObject)_The package screen_

From here, you should be able to connect your GitHub repository, which should populate the package page with details about the repository it's stored in, such as the README and any contributors.

## Things to note

Some other things I learned going through this process:

- Customizing the package page itself is very limited - it's limited to the GitHub repository the package is inside of. For this reason, it is not recommended that you do this if you intend to publish more than one package via a monorepo. For example, if you have a demo and an API package that you want to deploy, and they're both in the same repository, GitHub packages will show the *same* information for both, as they are both connected to the same repo.
- There are ways to automate this process via GitHub actions, but all of the examples online don't have great documentation to do this. I'll most likely follow up with another separate post that goes into further detail on this.
