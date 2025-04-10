//ddev-generated
// Auto start commands for ddev command hooks.
module.exports = {
  apps : [
    {
      name: "project_name.app",
      cwd: "/var/www/html/app",
      script: "npm run dev || (rm -rf node_modules && npm install && npm run dev)"
    }
  ]
}