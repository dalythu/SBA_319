export function logReq(req, res, next) {
  console.log(`${req.method} -- ${req.url} -- ${new Date().toLocaleDateString}`)

  if (req.bod) console.table(req.body)

  next()
}

export function globalErr(err, req, res, next) {
  res
    .status(err.status || 500)
    .json({ error: `❌ Error: ${err.message}` })
}
