# @launchstore/mobile-blocks

LaunchStore's mobile commerce block catalog — the React Native counterpart of
`launchstore-shared` (web Puck components). Each block is one RN component,
authored on gluestack-ui primitives, rendered **natively in the Expo app** and
**as DOM via react-native-web in the Puck editor canvas** (one component, two
renderers — docs/store-apps doc 4).

## The contract (per block)

```
blocks/<Name>/
  <Name>.tsx        RN component — props (merchant) × data (runtime) × actions (container)
  <Name>.meta.ts    category, mobileBehavior, dataDeps, actions, a11y
  fixtures.ts       editor-only mock data for the data channel
  puck-fields.ts    (later) Puck field defs driving the editor props panel
```

Blocks never call Medusa directly and never contain merchant logic — behavior
lives in the app's `CommerceProvider` (doc 6). Every visual value reads from
theme tokens (the platform `Theme` entity via the mobile-config bundle, doc 3).

`MOBILE_TEMPLATE_MAP` (src/registry.ts) is the single source of truth for
template-type scoping — consumed by the editor palette *and* the backend AI's
design assistant, so it always knows which blocks each `MOBILE_*` type allows.

## Consumers (in lockstep, same tag — task 2.7)

| Consumer | Resolver | Gets |
|---|---|---|
| `launchstore-mobile` | react-native | the shipping app |
| `launchstore-frontend` | react-native-web | the editor canvas preview |
| platform backend | — | block schemas for the AI registry (task 3.7) |

## Status

Scaffold (Epic 0). `AddToCart` is a placeholder stub pending the task 0.3 spike:
dual implementation on gluestack vs `@shopify/restyle`, rendered in the Puck
canvas + simulator with live token swapping — that spike finalizes the primitive
layer choice (doc 4 §5.1).
