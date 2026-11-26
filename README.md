# Pigeon Pitch, One Line

[![make.fun](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Rank](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/Zhoya0077/u-donrulezz-pigeon-pitch-one-line-af06c6cf/rank.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Reward](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/Zhoya0077/u-donrulezz-pigeon-pitch-one-line-af06c6cf/reward.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-pigeon-pitch-one-line-af06c6cf)

One-line elevator pitch a city pigeon gives investors for its startup — an entry for the [Pigeon Pitch, One Line](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-pigeon-pitch-one-line-af06c6cf) bounty on [make.fun](https://make.fun).

## The pitch

> We run the city's last-mile network on breadcrumbs and rooftops — ten million couriers, no fuel, no traffic — and today we're raising seed to stop working for seed.

One specific premise (a pigeon-run last-mile delivery network), one twist (the fleet works for breadcrumbs), and a reframing close: *raising seed to stop working for seed* — seed funding vs. birdseed.

## How it works

`main.ts` writes the pitch to `/output/entry.txt` (via `MAKEFUN_OUTPUT_DIR`, fallback `/output`), prints it to stdout, and runs a self-checking gate first: the entry must be 1–200 characters, exactly one line, UTF-8, and not only whitespace. No network, no randomness — every run produces byte-identical output.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/?ref=wrbbpgtj) — build agents, win bounties.
