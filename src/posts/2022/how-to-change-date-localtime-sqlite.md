---
title: "How to Change the Date and Time to Local Time in SQLite and PDO"
description:
tags: "post"
date: "2022-05-08"
permalink: "/posts/how-to-change-date-localtime-sqlite/"
---

Getting the current time and date in SQLite can be a little tricky.

For starters, SQLite doesn’t have a datatype for dates like MySQL does. They must be stored in either a [TEXT, REAL, or INTEGER datatype](https://www.sqlite.org/datatype3.html#date_and_time_datatype) and should use [Date and Time Functions](https://www.sqlite.org/lang_datefunc.html) to get a date or time.

From there, you’ll likely need to add a modifier to get the right local time as the default time for SQLite is in GMT. Don’t let the word modifier scare you, it’s just a string value like the word localtime or -4 hours.

## Set up an SQLite database to store a local date and time

In a table, add a row named `created_at` that has a type of TEXT.

![created_at row in DB Browser](/posts/img/created_at-table-in-DB-Browser.png)

Above is a screenshot of a table in DB Browser with a row named `created_at`, which is set as a TEXT type.

We can use the built-in Date and Time functions to convert this to local time.

Here’s how to convert the default time to local time.

```sql
SELECT datetime(now, localtime)
```

We’ll use the built-in `datetime()` function and a string modifier in our SQL statement. The `datetime()` function gets the current date and time and modifies and converts the time to local time using the `localtimemodifier`.

Then, we’ll need to prepare and write our SQL statement for PDO.

```sql
$sql_created_at = $pdo->query(SELECT datetime(now, localtime));
```

We store the returned value of the query in an $sql_created_at variable.

From here, we need to tell PDO how we want our data returned to us.

We do this when we fetch the data that was returned from our SQL statement (you may see this referred to as a result set) and was stored in the `$sql_created_at` variable.

```sql
$rows = $sql_created_at->fetch(PDO::FETCH_ASSOC);
```

We use the PDO parameter `FETCH_ASSOC` to return an array indexed by column name aka an associative array. (View the PHP documentation to read more about the available PDO parameters.)

The data fetched is then stored in a `$rows` variable.

Now, we can loop through the `$rows` array and print out the date.

```sql
foreach ($rows as $date) {
  echo $date;
}
```

Putting this all together, our block of code should look like this:

In test.php:

```php
<?php

  $sql_created_at = $pdo->query(SELECT datetime(now, localtime));
  $rows = $sql_created_at->fetch(PDO::FETCH_ASSOC);

  foreach ($rows as $date) {
    echo $date;
  }
?>
```

Now that we have our date and time in local time, let’s insert it into our database.

## Insert the current date and time into an SQLite database

Continuing on from the previous code, we’ll create another SQL statement that inserts the $date value into our SQLite database.

First, we’ll need to prepare and write another SQL query.

```sql
$sql = INSERT INTO tablename (created_at) VALUES ($date);
```

The tablename is whatever you chose to name your table.

Here we’re inserting the $date into the `created_at` row.

Putting the above code together with this `INSERT` statement should look like this:

```php
<?php

  $sql_created_at = $pdo->query(SELECT datetime(now, localtime));
  $rows = $sql_created_at->fetch(PDO::FETCH_ASSOC);

  foreach ($rows as $date) {
    echo $date;
  }

  $sql = INSERT INTO tablename (created_at) VALUES ($date);
?>
```

And that’s it!

You can use this block of code to get and set the local date/time and insert it into a database.

## An example of this code being used on a form submission

Here’s a block of code we can use to get and set the local date/time and insert it into a database on a form submission.

```php
<?php
  if (isset($_POST['submit'])) {
    $sql_created_at = $pdo->query(SELECT datetime(now, localtime));
    $rows = $sql_created_at->fetch(PDO::FETCH_ASSOC);

    foreach ($rows as $date) {
      echo $date;
    }

    $sql = INSERT INTO tablename (created_at) VALUES ($date);
 }
?>
```

The only bits of code added here are the `if (isset($\_POST[‘submit’])) {` and the closing `}` bracket.

Of course, on form submissions, there will likely be other fields you’ll want to get and store in a database, but this post focuses on setting the local date and time in SQLite using PDO and the built-in `datetime()` function.

## Wrapping up

Setting and storing the date and time can be useful, for example, you may want to set, store, and retrieve a date to display on the front end of a website.

Recently, I re-created and converted one of Brad Traversy’s PHP/MySQL apps to use SQLite and PDO. The app was a Feedback app where users submit their names, email, and feedback. The data is stored in a MySQL database and displayed on a feedback page.

Since converting it, I had to learn how to store, format, and display the date and time using SQLite as a database and PDO as the database connector!

Here’s a link to the GitHub repo of my [SQLite/PDO version of the feedback app](https://github.com/caseyocampo/feedback-app-sqlite)

Learning how to get and format dates and times was the reason for writing this article.

I hope this post helped you get, store, and retrieve the right time for your app!

I’m still learning about PHP, SQLite, and PDO so if you see something here or in the repo that could be improved, please feel welcome to reach out and work with me on it.

Til next time, happy hacking!
