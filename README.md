# DDEV Add App

Simply adds configuration to your project to run a front end app under `app.yourproject.ddev.site`.

### Steps

- `ddev add-on get yanniboi/ddev-add-app`
- Update files - replace `project_name` with the name of your project:
  - [app.nginx-site.conf](nginx_full/app.nginx-site.conf)
  - [config.add-app.yaml](config.add-app.yaml)
  - [apps.config.js](apps.config.js)
- Update the relevant port number in the nginx file (`:3000` by default)
- Update the npm command in [apps.config.js](apps.config.js) (`npm run dev` by default).
- `ddev restart`

### Credit

Shamelessly stolen from this lullabot blog: https://www.lullabot.com/articles/nodejs-development-ddev