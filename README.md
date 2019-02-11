# CLI Multiply App

A **CLI** app where you can put parameters and get the multiply table that **you want**

## Basic Commands

Print in console a multiply table:
- `node app list --base *number* `

Example:
- `node app list --base 5`
- This will print you the multiply table of 5 from 1 to 10

If you want a bigger table like: 5x1 to 5x50, then you just need to add the limit parameter:
- `node app list --base *number* --list *number*`

Example: 
- `node app list --base 7 --list 30`
- This will print you the multiply table of 7 from 1 to 30

Or if you want to make a file instead of printing tables in console, then you must use the *create* command

Example:
- `node app create --base 7 --list 30`

You can also use the simplified commands:
- `node app list -b 7 -l 30`
- `node app create -b 7 -l 30`
