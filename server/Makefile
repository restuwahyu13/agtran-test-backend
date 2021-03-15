NPM := npm
NPX := npx

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

########################################
### APPLICATION BUILD AUTOMATION
#######################################

build: npm.i lfx.i compiler.i

npm.i:
	${NPM} install

lfx.i:
	${NPM} run lintfix

compiler.i:
	${NPM} run build