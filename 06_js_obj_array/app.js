const data = [
  {"name": "cat", "value": 17, "group": "animal", },
  {"name": "dog", "value": 6, "group": "animal", },
  {"name": "snak", "value": 2, "group": "animal", },
  {"name": "tesla", "value": 11, "group": "car", },
  {"name": "bmw", "value": 23, "group": "car", }];

const res = Array.from(
  data.reduce((a, {group, ...rest}) => {
    return a.set(group, [rest].concat(a.get(group) || []));
  }, new Map())
).map(([group, children]) => ({group, children}));

console.log(res);