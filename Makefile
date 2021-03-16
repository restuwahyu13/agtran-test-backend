NPM := npm
NPX := npx

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
NPX := npx

klatest: #knex migrate latest database
	${KNEX} migrate:latest

krollback: #knex migrate rollback database
	${KNEX} migrate:rollback

kmigrate:
	$(shell exec npx knex migrate:latest)

##################################
### APPLICATION BUILD AUTOMATION
##################################

build: sinstall.i lfx.i sbuild.i cinstall.i cbuild.i

sinstall.i:
	${NPM} install --silent

lfx.i:
	${NPM} run lintfix

sbuild.i:
	${NPM} run build

cinstall.i:
	${NPM} run client:install

cbuild.i:
	${NPM} run client:build