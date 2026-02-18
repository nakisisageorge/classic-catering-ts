const path = require('path')

// Set environment variables for Next.js standalone mode
process.env.NODE_ENV = 'production'
process.env.PORT = process.env.PORT || 3000

// In standalone mode, Next.js generates a minimal server.js in .next/standalone/server.js
// We require that file to start the server.
// Note: You must copy the .next/static and public folders into .next/standalone manually
// if you haven't configured a custom build step.

const standaloneServerPath = path.join(__dirname, '.next', 'standalone', 'server.js')

try {
    require(standaloneServerPath)
} catch (err) {
    console.error('Failed to load standalone server. Ensure you have run "npm run build" and .next/standalone exists.')
    console.error(err)
    process.exit(1)
}
