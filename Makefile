.PHONY: build clean

build:
	stack build
	stack exec site rebuild

clean: 
	stack exec site clean
