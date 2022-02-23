const canFinish = (numCourses, prerequisites) => {
  console.log(`numCourses = ${numCourses}`);
  console.log(`prerequisites = ${JSON.stringify(prerequisites)}`);
  const courseMap = new Map(prerequisites);

  for (const [key, value] of prerequisites) {
    const curriculum = [key];
    let requisite = value;
    while (requisite || requisite === 0) {
      if (curriculum.includes(requisite)) {
        console.log("Impossible curriculum");
        return false;
      }
      curriculum.push(requisite);
      requisite = courseMap.get(requisite);
    }
  }
  console.log("Good Curriculum");
  return true;
}


console.log(canFinish(4, [[1,0],[2,0],[3,1],[3,2]]));
console.log(canFinish(2,  [[1,0],[0,1]]));