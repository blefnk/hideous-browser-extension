# hideous-browser-extension

🪚 Розширення для Firefox (версія для Chrome з'явиться незабаром) локально аналізує та видаляє москальську з переглядаємих сторінок. Воно також визначає, чи був створений контент на сайті або в YouTube особами з боліт, і чи використовує певний контент їхні творіння. Крім того, розширення може за бажанням видаляти такий контент, а за необхідністю намагатиметься пояснити причину видалення. Закопаємо гидких створінь з їхньою "творчістю" у їхнє ж болото!

> **Майже все що написано нижче не є актуальним для hideous-browser-extension і буде видалено незабаром. Як і декотрі файли та код у кодовій базі.**

🪚 A browser extension that indicates whether a website or YouTube video was created by nasty creatures or uses their creations in its own and tries to explain the reason.

## template-browser-extension

💡 Потрібен крутий стартер для вашого наступного розширення браузера? Ви можете використовувати [template-browser-extension](https://github.com/blefnk/template-browser-extension)! ✅ Bun, TypeScript, ESLint v9 тощо. 💻 Сумісний з Mozilla Firefox та браузерами на основі Chromium (Google Chrome, Microsoft Edge, Opera, Vivaldi тощо).

⭐ Цей проєкт є частиною екосистеми проєктів [Relivator](https://github.com/blefnk/relivator) та [Reliverse](https://github.com/blefnk/reliverse). 🙏 Будь ласка, поставте зірочку нашим проєктам, щоб зробити їх ще кращими.

**Демо шаблону**: [🦊 Firefox Addons](https://addons.mozilla.org/firefox/addon/browser-extension-template) _(відвідайте mozilla.org після встановлення)_

## Скрипти

- Для встановлення залежностей: `bun install`
- Для перевірки/лінтингу/форматування: `bun appts`
- Для збірки: `bun run build`
- Для лінтингу: `bun lint`
- Для запуску: `bun dev`

## 🩷 Спонсори

Дякуємо всім за підтримку та поширення цього проєкту! Цей проєкт, Relivator та Reliverse на даний момент спонсоруються наступними чудовими людьми/організаціями:

### [Patreon](https://patreon.com/blefnk), [Buy Me a Coffee](https://buymeacoffee.com/blefnk), [Ko-fi](https://ko-fi.com/blefnk)

Любите користуватися цим проєктом? Якщо ви відчуваєте щедрість, я був би вдячний за чашку кави. Ви отримаєте доступ до Reliverse Pro, приватних репозиторіїв, попередніх релізів та можливість впливати на планування проєктів. Дякую!

### [Boost Discord Server](https://discord.gg/C4Z46fHKQ8)

- demir

## Дорожня карта

TODO: Додати `bun web-ext lint` до скрипту `bun lint`, та `bun web-ext run` до `bun dev`. Наразі виникає помилка: `Error: Cannot find module './url'`.

TODO: Спробувати видалити `bun` та встановити `pnpm`. Перевірити, чи працює `web-ext` з цим менеджером пакетів, який працює нативно з `nodejs` (у `bun` є власні бібліотеки).

TODO: `bun addons-linter ./extension/` також не працює. Ця команда викликає помилку: `You did not build addons-linter yet`. Можливо, це через `bun`.

## Ресурси

- [web-ext](https://github.com/mozilla/web-ext): Інструмент командного рядка для допомоги у розробці, запуску та тестуванні веброзширень.

## Додатково

Цей проєкт створено за допомогою `bun init` у версії bun v1.1.12. [Bun](https://bun.sh) — це швидке середовище виконання JavaScript.

## FAQ

_Інші RQ (Reliverse Questions) можна знайти в репозиторії [relivator-nextjs-template](https://github.com/blefnk/relivator-nextjs-template)._

- **RQ21:** Як переключити менеджер пакетів з `bun` на pnpm, yarn або npm?
  **RA21:** Ось варіант `scripts` для `pnpm`. Пресети скриптів для інших менеджерів пакетів будуть додані незабаром. Просто замініть його в `package.json` (і переконайтеся, що нічого не пропущено).

  ```json
  "scripts": {
    "appts": "run-s knip lint build format typecheck",
    "build": "pnpm build ./src/content/youtube.ts --outdir ./extension/content/ && pnpm build ./src/utils/background.ts --outdir ./extension/utils/",
    "debug:eslint": "pnpm cross-env TIMING=12 eslint --fix .",
    "dev": "pnpm run src/index.ts",
    "dev:ext": "pnpm web-ext run --source-dir ./extension/",
    "dev:firefox": "pnpm run dev:ext -- --firefox=nightly",
    "format": "pnpm biome format --write .",
    "knip": "dotenv knip",
    "latest": "pnpm update --latest && pnpm add -D typescript@rc typescript-eslint@rc-v8",
    "lint": "pnpm eslint --cache --fix . && pnpm biome lint --write .",
    "lint:al": "pnpm addons-linter ./extension/",
    "lint:we": "pnpm web-ext lint",
    "reli:help": "pnpm tsx reliverse.ts --help",
    "reli:pm": "tsx reliverse.ts --pm",
    "reli:vscode": "pnpm tsx .vscode/presets/switcher.ts",
    "system": "envinfo --system --binaries --utilities",
    "typecheck": "tsc --noEmit",
    "typestat": "typestat --config typestat.json"
  }
  ```

## Структура проєкту

**Лише деякі файли тут перераховані.** Цей розділ буде оновлено у майбутніх версіях.

- [.vscode](https://code.visualstudio.com)
  - presets
  - [extensions.json](https://code.visualstudio.com/docs/editor/extension-marketplace)
  - [settings.json](https://code.visualstudio.com/docs/getstarted/settings)
- [extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
  - assets
  - [index.js](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
  - [manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- src
  - [env.ts](https://create.t3.gg/en/usage/env-variables)
  - [index.ts](https://bun.sh/docs/runtime/typescript)
- [biome.json](https://biomejs.dev/reference/configuration)
- [bun.lockb](https://bun.sh/docs/install/lockfile)
- [cspell.json](https://cspell.org/configuration)
- [eslint.config.js](https://eslint.org/docs/latest/use/configure/configuration-files)
- [knip.json](https://knip.dev/reference/configuration)
- [package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- [README.md](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [reliverse.ts](https://github.com/blefnk/reliverse)
- [reset.d.ts](https://www.totaltypescript.com/ts-reset)
- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [typestat.json](https://github.com/JoshuaKGoldberg/TypeStat#readme)

---

## Що робить це розширення

Розширення включає:

- браузерну дію з спливаючим вікном, яке містить HTML, CSS та JS
- контентний скрипт
- три зображення, кожне з яких представляє різного "звіра", що включені як веб-доступні ресурси

Коли користувач натискає на кнопку дії в браузері, з'являється спливаюче вікно, що дозволяє вибрати одного з трьох звірів.

Після відкриття спливаючого вікна, в поточну сторінку впроваджується контентний скрипт.

Коли користувач обирає звіра, розширення надсилає повідомлення з ім'ям вибраного звіра до контентного скрипта.

Коли контентний скрипт отримує це повідомлення, він замінює поточний вміст сторінки на зображення вибраного звіра.

Коли користувач натискає кнопку скидання, сторінка перезавантажується і повертається до свого початкового вигляду.

Зверніть увагу, що:

- якщо користувач перезавантажує вкладку або перемикається між вкладками під час відкритого спливаючого вікна, то розширення більше не зможе змінювати сторінку (оскільки контентний скрипт був впроваджений лише в оригінальну вкладку).

- за замовчуванням [`tabs.executeScript()`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/executeScript) впроваджує скрипт лише після того, як вебсторінка та її ресурси завершать завантаження. Це означає, що кліки у спливаючому вікні не матимуть ефекту, доки сторінка не завантажиться повністю.

- неможливо впроваджувати контентні скрипти в певні сторінки, включно з привілейованими сторінками браузера, такими як "about:debugging", і на вебсайт [addons.mozilla.org](https://addons.mozilla.org/). Якщо користувач натискає на іконку розширення, коли така сторінка завантажена у активну вкладку, у спливаючому вікні буде відображено повідомлення про помилку.

## Що показує це розширення

- як створити браузерну дію зі спливаючим вікном
- як змінювати зображення `browser_action` залежно від теми
- як стилізувати спливаюче вікно та додати до нього функціональність за допомогою CSS та JS
- як програмно впроваджувати контентний скрипт за допомогою `tabs.executeScript()`
- як надсилати повідомлення з головного розширення до контентного скрипта
- як використовувати веб-доступні ресурси, щоб вебсторінки могли завантажувати упакований контент
- як перезавантажувати вебсторінки
