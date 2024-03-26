const marvel_heros = ['ironman', 'thor', 'captain']

const dc = ['batman', 'superman']

const allHeros = []
allHeros.push(...marvel_heros)
allHeros.push(...dc) 
console.log(allHeros)
console.log(typeof allHeros)

const teamedHeros = []

teamedHeros.push(marvel_heros, dc)
console.log(teamedHeros)
console.log(typeof teamedHeros);
console.log(teamedHeros.length)
console.log(teamedHeros[0][0])


// 
// **** to spread out the arrays in arrays, use flat method

const real_teamedHeros = teamedHeros.flat(Infinity)
console.log(real_teamedHeros)