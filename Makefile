.PHONY: build

build:
	stack build
	stack exec site rebuild
