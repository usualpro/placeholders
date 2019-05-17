#!/bin/bash
## poll the server over and over again
## until it's been booted
wait-on http://localhost:5000

## and now run cypress
cypress run