import glob from 'fast-glob'

export async function importCommand(path: string) {
  return require(path)
}

export async function importEvent(path: string) {
  return (await import(path)).default
}

export async function loadFiles(dirPath: string) {
  const files = await glob(
    `${process.cwd().replace(/\\/g, '/')}/bot/src/${dirPath}/**/*.{js,ts}`
  )
  for (const file of files) {
    delete require.cache[require.resolve(file)]
  }
  return files
}
