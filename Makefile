NPM := npm
NPX := npx

##################################################
### APPLICATION INSTALL PACKAGE CLIENT AND SERVER
#################################################

install:
	${NPM} install && ${NPM} run client:install

#####################################
### APPLICATION BUILD AND DEV CLIENT
####################################

cserve:
	${NPM} run client:start

cbuild:
	${NPM} run client:build

####################################
### APPLICATION BUILD AND DEV SERVER
####################################

dev:
ifdef arch
		${NPM} run dev-${arch}
endif

prod: lfx.c compiler.c

lfx.c:
	${NPM} run lintfix

compiler.c:
	${NPM} run build

###############################
### KNEX MIGRATION MANUAL
###############################

KNEX := knex

klatest: #knex migrate latest database
	${KNEX} migrate:latest

krollback: #knex migrate rollback database
	${KNEX} migrate:rollback

##################################
### APPLICATION BUILD AUTOMATION
##################################

build: npm.i lfx.i sbuild.i cbuild.i

npm.i:
	${NPM} install && 	${NPM} client:install

lfx.i:
	${NPM} run lintfix

sbuild.i:
	${NPM} run build

cbuild.i:
	${NPM} run build