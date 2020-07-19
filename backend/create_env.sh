# create virtual environment (named env) in project root
python3 -m venv env

# activate environment
source env/bin/activate

# install pip-tools to bootstrap pip-compile that generates requirements.txt
python -m pip install pip-tools
