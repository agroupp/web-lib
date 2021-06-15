
# WebLib

Creating web library in nx.

## Example Library

Example library exists in `libs/sdk`. It creates `ESdk` object binded to window when loaded by `script` tag.

To  build it:
```sh
$ npm run build:sdk
```

After build is done ready to use package will be in `dist/sdk` folder from where it can be imported.

## Usage
Examples of usage as npm package you can see in demo Angular application

```typescript
import { ESdk } from '../../../../dist/sdk';
```

As plain web libray example is in `sdk-index.html`, run it with `http-server`.

```html
<script src="/dist/sdk/sdk.js"></script>
```

