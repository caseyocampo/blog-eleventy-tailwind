---
title: "How to Connect a Remote Private GitHub Repo to cPanel via SSH"
description:
tags: "post"
date: "2022-12-15"
permalink: "/posts/connect-remote-private-github-repo-to-cpanel/"
---

This post outlines how to connect a remote private GitHub repository to cPanel.

In this example, I’ll be using Namecheap’s cPanel. (All cPanels basically have the same options so if you don’t use Namecheap, there’s a good chance you’ll still be able to follow this guide.)

## Step 1 - Navigate to the cPanel terminal

![cPanel dashboard outlining the Terminal option](/posts/2022/img/cpanel.png)

## Step 2 - Create a ECDSA (Elliptic Curve Digital Signature Algorithm) SSH key

Note: RSA keys are not supported for GitHub and Namecheap’s cPanel connection.Run the following command to create the ECDSA key:

```
ssh-keygen -t ecdsa -b 521 -C "username@example"
```

The username should be the cPanel username. The example should be the text that is after the @ character in the cPanel terminal.

![screenshot of cPanel terminal with username and text after the @ character](/posts/2022/img/cpanel-terminal.png)

After the command is run, continue to press the Enter key through the name and passphrase prompts. The name will default to id_ecdsa and a passphrase will not be set.

## Step 3 - Verify that you generated the SSH key

To confirm that the key exists and is in the correct location, run the following command:

```
cat ~/.ssh/id_ecdsa.pub
```

You’ll need to copy this key and add it to your private GitHub repository.

## Step 4 - Register the ECDSA Key With The Private GitHub Repository

- Log in to your GitHub account.
- Navigate to your private repository.
- In the top right corner of the page, select **Settings**.
- In the left side menu, select **Deploy** keys.
- In the top right corner of the page, select **Add deploy key**.
- Enter your SSH key data:

  - In the Title text box, enter a display name for the key.
  - In the Key text box, paste the entire SSH key. If you want to push code from your cPanel account to your GitHub account, select the **Allow write access** checkbox. If you do not select this checkbox, you can only deploy changes from your GitHub repository to the cPanel-hosted repository.

- Select **Add key**.

## Step 5 - Clone the private GitHub repo to cPanel

Go to the Git Version Control in your cPanel and clone your repository there.

![cPanel dashboard with the Git Version Control option outlined](/posts/2022/img/cpanel-git-version-control.png)

Then, select the “Create” button to create a new connection to a repository.

![Git Version Control dashboard with the Create button outlined](/posts/2022/img/cpanel-create-button.png)

A new window will appear where you can enter the details of your remote private GitHub repo.

![Git Version Control dashboard](/posts/2022/img/cpanel-clone-details.png)

Now, you should be able to push to your remote repo and then pull in the changes in the cPanel.

### Credit

I was able to write this post thanks to an answer by user [Sodmond on Stackoverflow](https://stackoverflow.com/questions/72588422/github-private-repo-connection-issue-on-cpanel) and a [post on webhostingmagic.com](https://dashboard.webhostingmagic.com/knowledgebase/242/How-To-Clone-A-Private-Github-Repo-To-A-cPanel-Server.html).
