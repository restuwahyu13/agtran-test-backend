NPM := npm
NPX := npx

#####################################
### APPLICATION BUILD AND DEV CLIENT
####################################

cserve:
	${NPM} run serve

cbuild:
	${NPM} run build

########################################
### APPLICATION BUILD AUTOMATION
#######################################

build: npm.i compiler.i

npm.i:
	${NPM} install

compiler.i:
	${NPM} run build