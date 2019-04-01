# Настройка сборки

В данной статье описывается базовая настройка окружения
для разработки веб-приложения.

Все пункты являются опциональными и предлагаются к использованию по необходимости.
Однако, если вы хотите ознакомиться с каким-то из перечисленных инструментов,
данная статья - отличное место, чтобы начать.
Кроме того, мы приведем ссылки на документацию каждого инструмента, чтобы
продолжить изучение.

## Cборка и тестирование веб-приложения

Для сборки и тестирования мы будем использовать [npm].

В мире Node.js есть две популярные системы управления
пакетов: npm и yarn. Yarn разрабатывался как быстрая замена
npm, однако со времени начала разработки, npm ускорился и
теперь при использовании npm вы не теряете в производительности.

Мы рекомендуем использовать npm, так как он идет в составе
node.js, не требует дополнительной установки.

Нужно отметить, что обе системы управления пакетов создают *lock-файлы*:
файлы, в которых перечислены все используемые версии пакетов, их зависимостей,
зависимостей зависимостей и т.д. Эта информация нужна, чтобы иметь
одинаковые версии зависимостей во время разработки и после
сборки на profuction. При этом названия и формат этих файлов
несовместимы между yarn и npm. Поэтому **необходимо использовать
одну систему управления пакетами на проект**.

В первом приближении команды yarn и npm взаимозаменимы, выберите один из
инструментов и используйте только его. Если вы встретите в интернете команды системы,
которую вы не используете, воспользуйтесь
этой таблицей соответствия [источник][comparing-npm-yarn].

| npm (v5)                                | Yarn                                      |
| --------------------------------------- | ----------------------------------------- |
| `npm install`                           | `yarn install`                            |
| **_(N/A)_**                             | `yarn install --flat`                     |
| **_(N/A)_**                             | `yarn install --har`                      |
| `npm install --no-package-lock`         | `yarn install --no-lockfile`              |
| **_(N/A)_**                             | `yarn install --pure-lockfile`            |
| `npm install [package] --save`          | `yarn add [package]`                      |
| `npm install [package] --save-dev`      | `yarn add [package] --dev`                |
| **_(N/A)_**                             | `yarn add [package] --peer`               |
| `npm install [package] --save-optional` | `yarn add [package] --optional`           |
| `npm install [package] --save-exact`    | `yarn add [package] --exact`              |
| **_(N/A)_**                             | `yarn add [package] --tilde`              |
| `npm install [package] --global`        | `yarn global add [package]`               |
| `npm update --global`                   | `yarn global upgrade`                     |
| `npm rebuild`                           | `yarn add --force`                        |
| `npm uninstall [package]`               | `yarn remove [package]`                   |
| `npm cache clean`                       | `yarn cache clean [package]`              |
| `rm -rf node_modules && npm install`    | `yarn upgrade`                            |
| `npm version major`                     | `yarn version --major`                    |
| `npm version minor`                     | `yarn version --minor`                    |
| `npm version patch`                     | `yarn version --patch`                    |

## Сборка и разработка

[Create React App] и [Craco]

## Пишем литературный код в 21 веке

[Coffeescript] пишем [литературный код][literate-programming]

## пишем html со скоростью звука

[Pug]

## Continious integration

[Travis.ci]

## Хостинг

[Heroku]

[Npm]: https://docs.npmjs.com/
[Craco]: https://github.com/sharegate/craco/blob/master/packages/craco/README.md#configuration-overview
[Create React App]: https://facebook.github.io/create-react-app/docs/getting-started
[Coffeescript]: https://coffeescript.org/#introduction
[literate-programming]: https://en.wikipedia.org/wiki/Literate_programming
[pug]: https://pugjs.org/api/getting-started.html
[Travis.ci]: https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
[Heroku]: https://www.heroku.com/nodejs
[comparing-npm-yarn]: https://yarnpkg.com/lang/en/docs/migrating-from-npm/#toc-cli-commands-comparison
