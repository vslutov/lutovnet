# Настройка сборки

В данной статье описывается базовая настройка окружения
для разработки веб-приложения.

Все пункты являются опциональными и предлагаются к использованию по необходимости.
Однако, если вы хотите ознакомиться с каким-то из перечисленных инструментов,
данная статья - отличное место, чтобы начать.
Кроме того, приведу ссылки на документацию каждого инструмента, чтобы
продолжить изучение.

## Подготовка

Перед началом проекта рекомендую поставить базовые вещи, без которых
трудна разработка проекта на javascript:

1. [git][git] и [git-lfs][git-lfs];
1. браузер, например, [Firefox][firefox];
1. [Node.js и npm][nodejs].

В дистрибутиве Fedora все эти программы последних стабильных версий есть в стандартном
хранилище. Установить их можно с помощью команды `dnf install git git-lfs firefox nodejs`.

## Cборка и тестирование веб-приложения

Для сборки и тестирования будем использовать [npm].

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
которую вы не используете, воспользуйтесь этой таблицей соответствия:

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

[источник][comparing-npm-yarn]

### Окружение

Прежде, чем начать оформление npm пакета, рекомендую настроить окружение.

Установите сохранение зависимостей при `npm install` по умолчанию:

```bash
    npm config set save=true
    npm config set save-exact=true
    cat ~/.npmrc
```

Теперь вместо `npm install foobar` npm будет выполнять `npm install --save --save-exact foobar`.

### Начало проекта

Для начала проекта можно использовать `npm init`. Эта команда запросит у вас значения для
некоторых полей и создаст первую версию package.json. В этом файле хранится основная информация
о проекте, зависимостях, настройки для некоторых инструментов и т.п.

Если вы будете использовать Create React App, то эта команда вам не понадобится, но полезно
посмотреть из чего состоит минимальный проект на javascript.

### Tips&tricks

Полезные команды, о которых стоит знать каждому разработчику:

- `npm test` - запуск скрипта, который прописан в файле package.json в переменной `scripts.test`
- `npm version (patch|minor|major)` - обновить версию пакета в файле package.json,
  создать коммит с этим изменением и пометить его тегом `vX.Y.Z`.

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
[git]: https://git-scm.com/
[git-lfs]: https://git-lfs.github.com/
[fedora]: https://getfedora.org/
[firefox]: https://www.mozilla.org/en-US/firefox/
