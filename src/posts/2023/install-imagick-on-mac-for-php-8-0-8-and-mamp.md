---
title: "How to Install Imagick on Mac for PHP 8.0.8 and MAMP"
description:
tags: "post"
date: "2023-01-06"
permalink: "/posts/install-imagick-on-mac-for-php-8-0-8-and-mamp/"
---

A straightforward guide to installing Imagick on a Mac using PHP 8.0.8 and MAMP.

## Step #1 – Install php

Install php via Homebrew.

```
brew install php
```

## Step #2 – Install Imagick directly from the repo

Be sure to run these commands one by one.

```
git clone https://github.com/Imagick/imagick
cd imagick
phpize && ./configure
make
make install
```

Here is a [YouTube video that shows Step 2 in action](https://www.youtube.com/watch?v=W2kfP9XwiNs).

## Step #3 – Enable imagick.so in MAMP’s php.ini file

It is located in `MAMP > bin > php > php8.0.8 > conf > php.ini`

Then, search for **extension=imagick.so**.

It will likely be commented out via a semicolon character before **extension=imagick.so**.

Remove the semicolon to enable the **imagick.so** extension.

![extension=imagick.so in php.ini file](/posts/2023/img/extensionimagick.png)

## Step #4 – Restart the php services

Restart php services via Homebrew command.

```
brew services restart php
```

## Step #5 – Verify that imagick shows up in phpinfo

Launch MAMP and check the phpinfo by going to Tools > phpInfo.

![phpinfo in MAMP dashboard](/posts/2023/img/phpinfo-in-mamp.png)

Then, search for **imagick**.

![Imagick listed in phpinfo page](/posts/2023/img/imagick-phpinfo.png)

You should see imagick appear, congrats! It should be successfully installed.
