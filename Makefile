.PHONY: build clean watch

build:
	stack build
	stack exec site rebuild

clean: 
	stack exec site clean

watch:
	stack exec site watch
