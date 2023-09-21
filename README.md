[![Pedaki](.github/images/banner.png)](https://www.pedaki.fr)

<p align="center">
  <a aria-label="License" href="https://github.com/PedakiHQ/pedaki/blob/main/LICENSE-CC-BY-NC-SA">
    <img alt="CC-BY-NC-SA" src="https://img.shields.io/badge/license-CC--BY--NC--SA--4.0-lightgrey">
  </a>
</p>

# Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
# or
pnpm dev --filter <www|docs>
```

# Contributing

Pedaki is an open source project. Feel free to contribute by opening issues and/or pull requests.
See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.
