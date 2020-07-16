import os
from setuptools import setup, find_packages

ROOT_DIR = os.path.abspath(os.path.dirname(__file__))


def is_pkg(line):
    return line and not line.startswith(('-r', '--', 'git', '#'))


def read_requirements(filename):
    with open(os.path.join(ROOT_DIR, filename), encoding='utf-8') as f:
        return [line.split('#')[0].strip()
                for line in f.read().splitlines()
                if is_pkg(line)]


setup(
    name='meeting-scheduler',
    version='0.1.0',
    description='',
    url='https://github.com/engloop/meeting-scheduler',
    author='engloop',
    license='MIT',

    # https://pypi.org/classifiers/
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7'
    ],
    packages=find_packages(exclude=['ansible', 'tests']),
    install_requires=read_requirements('requirements.txt'),
    extras_require={'dev': read_requirements('requirements-dev.txt')},
    include_package_data=True,
    zip_safe=False
)
