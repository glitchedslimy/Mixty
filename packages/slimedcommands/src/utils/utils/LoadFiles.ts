import glob from 'fast-glob'

export async function loadFiles(dirName: string) {
  const files = await glob(
    `${process.cwd().replace(/\\/g, '/')}/bot/src/${dirName}/**/*.{js,ts}`
  )
  for (const file of files) {
    delete require.cache[require.resolve(file)]
  }
  return files
}

export async function loadInternalFiles(dirName: string) {
  const files = await glob(`${__dirname}/../../${dirName}/events/**/*.{js,ts}`)

  for (const file of files) {
    delete require.cache[require.resolve(file)]
  }

  return files
}
