import nconf from 'nconf'

nconf.argv().env()
nconf.file('secret', { file: 'config/secret.json' })
nconf.file('default', { file: 'config/default.json' })

export const CONF = (key)=> nconf.get(key)
