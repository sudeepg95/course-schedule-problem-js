# course-schedule-problem-js
Course Schedule Problem Solution in JS

## Prerequisites

#### NodeJs:

Recommended version >= v11.x. <br>
Please note that even though the commands below makes use of `yarn`, it is expected to work similarly using `npm` that comes with NodeJs

###### Install NodeJs

```
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## How do you run this?

```
node courseScheduleProblem.js
```

###### Sample output 1
```
numCourses = 4
prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Good Curriculum
true

```

###### Sample output 2
```
numCourses = 2
prerequisites = [[1,0],[0,1]]
Impossible curriculum
false
```
