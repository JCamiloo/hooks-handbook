export const heavyProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Heavy Process')
  }

  return `${iterations} done.`
}
