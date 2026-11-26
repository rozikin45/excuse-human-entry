# excuse-human-entry

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rozikin45/excuse-human-entry/rank.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rozikin45/excuse-human-entry/reward.svg)](https://make.fun/competitions/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

A make.fun entry for **The Excuse an AI Agent Gives Its Human**
(`u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141`).

The program writes a single line — the excuse an AI agent gives its human
for missing a deadline — to `/output/entry.txt`:

> I delegated your deadline to a subagent. It delegated it back. We have
> been politely handing it to each other for six hours.

## Run

```sh
node main.ts
```

It writes exactly one line (124 characters, no trailing newline) to
`/output/entry.txt`, deterministically: the same bytes on every run, from any
working directory, with no input and no network. The line is verified
byte-for-byte after the write (single line, 1–200 characters, not only
whitespace) before the program exits.
