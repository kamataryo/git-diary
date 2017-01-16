# git-diary

pretty CSV formatter on a day for `git log`.

## Dependency

Git and Node >= 6.

## install

```
$ npm install -g git-diary
```

## How to use

```
$ git diary --today
$ git diary --yesterday
$ git diary --3-days-ago
```

## export example

```
$ git diary --yesterday
Sun Jan 15 10:50:29 2017,KamataRyo,1b14e81,Fix the bug on issue#123
Sun Jan 15 03:02:41 2017,KamataRyo,61aa24a,Add xyz
Sun Jan 15 02:54:40 2017,KamataRyo,13eebb9,Delete XYZ
Sun Jan 15 02:38:46 2017,KamataRyo,07b1d22,Merge abc(Pull Request#23)
Sun Jan 15 01:50:34 2017,KamataRyo,efe43db,Fix typo
Sun Jan 15 01:21:41 2017,KamataRyo,8a83cd7,Update readme
```
