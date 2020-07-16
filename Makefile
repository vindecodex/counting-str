COMPILER = tsc
INPUT_FILE = ./index.ts

all: $(INPUT_FILE)
	$(COMPILER) $(INPUT_FILE)
