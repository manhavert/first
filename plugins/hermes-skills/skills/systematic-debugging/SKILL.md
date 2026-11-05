---
name: systematic-debugging
description: 4-phase root-cause debugging. Use for any bug, failing test, build error or unexpected behaviour, before proposing a fix.
---

# Systematic Debugging

Adapted from Hermes Agent (NousResearch, MIT licence), originally from obra/superpowers.

**Iron law: no fixes without root-cause investigation first.** Symptom fixes are failures.

## Feedback loop rule

Before building a theory, create or find a tight command that goes red on the user's exact symptom and green once fixed: fast, deterministic, runnable by you, and specific to this bug. If a clean repro is hard, spend the effort here. Options, roughly in order: failing test, curl/HTTP script, CLI call with fixture input, headless browser script, replayed trace/payload, throwaway harness, fuzz loop, `git bisect run`, old-vs-new differential, scripted human steps (last resort). For flaky bugs, raise the reproduction rate first.

## Phase 1: Root cause

1. Read the full error and stack trace. Search the codebase for the error string.
2. Build and run the tight loop.
3. Check recent changes: `git log --oneline -10`, `git diff`, new dependencies or config.
4. Multi-component systems: log what enters and leaves each boundary, run once, find where it breaks.
5. Trace bad values upstream to their source. Fix at the source.

Do not continue until you can say WHY it happens.

## Phase 2: Pattern

0. Minimise the repro: cut inputs/steps one at a time, re-running the loop after each.
1. Find similar working code in the same codebase.
2. Read any reference implementation completely.
3. List every difference between working and broken.
4. Note dependencies, config and assumptions.

## Phase 3: Hypothesis

1. Write 3–5 falsifiable hypotheses, ranked by likelihood and cheapness to test. Show the list to the user if they are present.
2. Test the top one with the smallest probe, one variable at a time. Tag temporary logs (e.g. `[DEBUG-a4f2]`) for easy cleanup.
3. Worked → Phase 4. Didn't → new hypothesis; never stack fixes.
4. If you don't understand something, say so and ask.

## Phase 4: Fix

1. Write a failing regression test first.
2. Make one change that addresses the root cause. No bundled refactors.
3. Run the regression test and the full suite.
4. **Rule of three:** after 3 failed fixes, stop and discuss the architecture with the user before trying again.

## Red flags — go back to Phase 1

"Quick fix for now", "just try X", several changes at once, skipping the test, "it's probably X", fixing before tracing data flow, "one more attempt" after 2+ failures.
