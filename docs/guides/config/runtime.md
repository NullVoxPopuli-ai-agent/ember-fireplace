# Runtime Configuration

The runtime configures how to start your application and set its configuration.

## Configure your Application

At first configure your application:

```ts [src/app.ts]
import EmberRouter from '@ember/routing/router';
import EmberApp from 'ember-strict-application-resolver';
import type ApplicationInstance from '@ember/application/instance';

class Router extends EmberRouter {
  location = 'history';
  rootURL = '/';
}

Router.map(function () {
  // your routes here
});

export default class App extends EmberApp {
  modules = {
    './router': { default: Router },
    ...import.meta.glob('./services/**/*.{ts,gts}', { eager: true }),
    ...import.meta.glob('./routes/**/*.{ts,gts}', { eager: true }),
    ...import.meta.glob('./templates/**/*.{ts,gts}', { eager: true }),
  };
}

export function createApp(options: Record<string, unknown> = {}) {
  const app = App.create({ ...options, autoboot: false });

  return app.buildInstance();
}

export async function start(instance: ApplicationInstance) {
  await instance.boot();

  instance.startRouting();
}
```

Then load it in your `index.html`:

```html [index.html]
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>YOUR TITLE</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <script type="module">
      import { createApp, start } from './src/app';

      const app = createApp();

      start(app);
    </script>
  </body>
</html>
```

That is enough to start the application.

## Configure your Runtime

For a long time, Ember's runtime has been configured in the `Application` route `beforeModel()` hook.

Let's give it a dedicated place for its configuration and hook it into the application config above.
Usually you configure your services at boot. There is a main `configure()` function that calls our configure functions by topic (one for intl, one for auth).

```ts [src/config.ts]
import translations from 'virtual:ember-intl-loader';

import { auth } from './auth';

import type ApplicationInstance from '@ember/application/instance';

function configureAuth(app: ApplicationInstance) {
  const authService = app.lookup('service:auth');
  const router = app.lookup('service:router');

  authService.setup(auth);
  authService.subscribe('sessionInvalidated', () => {
    router.transitionTo('application');
  });
}

function configureIntl(app: ApplicationInstance) {
  const intl = app.lookup('service:intl');

  intl.setLocale('de');

  for (const [locale, messages] of Object.entries(translations)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    intl.addTranslations(locale, messages);
  }
}

export function configure(app: ApplicationInstance) {
  configureAuth(app);
  configureIntl(app);
}
```

Now let's inject our config into our `index.html`:

```html [index.html]
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>YOUR TITLE</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <script type="module">
      import { createApp, start } from './src/app';
      import { configure } from './src/config'; // [!code ++]

      const app = createApp();

      configure(app); // [!code ++]
      start(app);
    </script>
  </body>
</html>
```

