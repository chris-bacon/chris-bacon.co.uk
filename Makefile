.PHONY: build clean watch deploy

build:
	stack build
	stack exec site rebuild

clean: 
	stack exec site clean

watch:
	stack exec site watch

deploy:
	./deploy/deploy-aws
