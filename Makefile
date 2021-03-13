NPM := npm
NPX := npx

####################################
### DOCKER BUILD
####################################

DOCKER := docker

db:
	${DOCKER} build -f Dockerfile -t express/rest-api:${v} .


##########################################
### APPLICATION DOCKER COMPOSE AUTOMATION
##########################################

cpup:
	${DOCKER}-compose -f docker-compose.yml up --build -d

cpdown:
	${DOCKER}-compose -f docker-compose.yml down

#################################
### APPLICATION BUILD AND DEV
#################################

dev: #application with env development
ifdef arch
		${NPM} run dev-${arch}
endif

prod: lfx.c compiler.c #application with env production

lfx.c:
	${NPM} run lint:fix

compiler.c:
	${NPM} run build


####################################
###  ESLINT AND PRETTIER FORMATTER
####################################

fix:
	${NPM} run lint

format:
	${NPM} run format

lfx:
	${NPM} run lint:fix

###############################
### KNEX MIGRATION MANUAL
###############################

KNEX := knex

klatest: #knex migrate latest database
	${KNEX} migrate:latest

krollback: #knex migrate rollback database
	${KNEX} migrate:rollback

###############################
###  GIT AUTOMATION
###############################

GIT := git

gh: add.o commit.o push.o

add.o:
	${GIT} add .

commit.o:

ifdef msg
	${GIT} commit -m "${msg}"
endif

push.o:
	${GIT} push origin master

########################################
### APPLICATION BUILD AUTOMATION
#######################################

bdev: npm.b lfx.b

npm.b:
	${NPM} install

lfx.b:
	${NPM} run lint:fix

bprod: npm.i lfx.i compiler.i

npm.i:
	${NPM} install --silent --only=prod && npm audit fix

lfx.i:
	${NPM} run lint:fix

compiler.i:
	${NPM} run build