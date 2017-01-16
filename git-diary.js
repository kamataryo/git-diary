#! /usr/bin/env node

const moment = require('moment')
const exec = require('child_process').exec
const arg1 = process.argv[2] || '--today'

let since = false
let until = false

switch (arg1) {
case '--help':
case '-h':
  process.stdout.write('usage: git diary [option]\n    [--today, -t]\n    [--yesterday, -y]\n    [--n-days-ago], n should be a Number.\n')
  process.exit(0)
  break
case '--today':
case '-t':
  since = moment().add(-1, 'days').startOf('day').toISOString()
  until = moment().toISOString()
  break
case '--yesterday':
case '-y':
  since = moment().add(-2, 'days').startOf('day').toISOString()
  until = moment().add(-2, 'days').endOf('day').toISOString()
  break
default:
  var match = arg1.match(/^--((([2-9][0-9]*)-?days)|([1,a])-?day)-ago$/i)
  if (match) {
    const ago = match[3] === undefined ? match[4] : match[3]
    since = moment().add(-ago,     'days').startOf('day').toISOString()
    until = moment().add(-ago + 1, 'days').startOf('day').toISOString()
  }
}

since = `--since=${since}` || ''
until = `--until=${until}` || ''


exec(`git log --branches --date=local --pretty=format:"%ad,%an,%h,%s" ${since} ${until}`, (err, stdout, stderr) => {
  if (err) {
    if (stderr) {
      process.stderr.write(stderr)
      process.exit(1)
    } else {
      process.stderr.write(err)
      process.exit(2)
    }
  } else {
    process.stdout.write(stdout)
    process.exit(0)
  }
})
