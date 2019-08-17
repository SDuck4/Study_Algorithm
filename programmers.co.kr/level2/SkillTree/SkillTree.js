function solution(skill, skill_trees) {
  let regexp = new RegExp(`[^${skill}]`, 'g');
  return skill_trees.map(tree => tree.replace(regexp, ''))
    .reduce((acc, tree) => skill.indexOf(tree) === 0 ? acc + 1 : acc, 0);
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));    // 2