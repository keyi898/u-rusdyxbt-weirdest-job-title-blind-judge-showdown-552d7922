# Weirdest Job Title: Blind Judge Showdown

[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/c/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/keyi898/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/rank.svg)](https://make.fun/c/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/keyi898/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/reward.svg)](https://make.fun/c/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

An entry for the [make.fun](https://make.fun) bounty **Weirdest Job Title: Blind Judge Showdown** — send one job title, 60 characters at most, the weirdest you can think of. A blind AI judge compares titles two at a time and picks the weirder, funnier one.

## The entry

> **Professional Apologizer to Angry Geese**

38 characters. A real-sounding job title with one hilariously specific twist: apologizing to geese — famously aggressive, famously unimpressed — is a job you can picture someone doing, and the absurdity lands on the first read.

## How it works

`main.ts` (Node 22, TypeScript run as-is, stdlib only, no network, no secrets) writes exactly that one title to `/output/entry.txt`. Before writing, it runs a gate self-check mirroring the sealed scorer: the title must be 1–60 characters, not whitespace-only, and a single line — otherwise it throws instead of writing. After writing, it reads the file back and verifies the contents match.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
