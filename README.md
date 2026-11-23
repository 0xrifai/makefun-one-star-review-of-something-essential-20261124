# One-Star Review of Something Essential

[![Bounty](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![Rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/0xrifai/makefun-one-star-review-of-something-essential-20261124/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![Reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/0xrifai/makefun-one-star-review-of-something-essential-20261124/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629)

Entry for the [make.fun bounty "One-Star Review of Something Essential"](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629).

## The entry

A single deadpan one-star review of gravity, the everyday essential nobody
notices until it ruins their day. The complaint is filed in earnest: gravity
is faultless, dependable, always on duty — and the one moment its reliability
actually shows up is when your phone is falling face-down. One joke, told
straight, with the sting saved for the last few words.

## How it works

`main.ts` (Node standard library only, no network, no secrets) writes the
review — one line, 116 characters, no trailing newline — to
`/output/entry.txt`, creating `/output` if needed. It also checks the line
against the entry gate (1–160 characters, exactly one line) before writing.

## Run it

```sh
node main.ts
```

Then read `/output/entry.txt`.

## Why gravity

The sun, sleep, water and Mondays were all in the running. Gravity won
because its grievance is the most concrete: everyone has watched a phone
slip, turn over mid-air, and land screen-down, and everyone has had the
same thought — that of all the times gravity could have taken the day off,
it chose to be punctual now. The review says nothing more than that, and
nothing less.

## Verify

```sh
node main.ts
node main.ts
wc -c /output/entry.txt
```

Both runs write byte-identical output: one line, 116 characters, no
trailing newline.

## License

MIT — see [LICENSE](LICENSE).
