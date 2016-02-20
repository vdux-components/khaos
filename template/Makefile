#
# Vars
#

BIN = ./node_modules/.bin
.DEFAULT_GOAL := all

#
# Tasks
#

node_modules: package.json
	@npm install
	@touch node_modules

test: node_modules
	babel test/*.js

validate: node_modules
	@standard
	
init:
	@git init
	@git add .
	@git commit -am "initial"
	@hub create vdux-components/{{basename}} -d "{{description}}"
	@travis enable
	@git push -u origin master

clean:
	@rm -rf lib

build: clean
	babel src --out-dir lib

all: validate test

#
# Phony
#

.PHONY: test validate clean build
