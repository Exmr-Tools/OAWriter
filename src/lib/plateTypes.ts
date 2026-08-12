// Type-cast helpers for Plate editor API calls.
//
// Plate's editor.tf.* and editor.api.* methods use deeply generic signatures tied to
// the full editor Value type. These helpers centralise the cast at one definition site
// so call sites can write e.g. `asNodePatch({ type: 'p' })` instead of the verbose
// `{ type: 'p' } as Parameters<typeof editor.tf.setNodes>[0]`.

import type { At, Descendant, TElement, Value } from '@platejs/slate'

/** Cast a plain object to the node props type expected by editor.tf.setNodes(). */
export const asNodePatch = (x: object): Partial<TElement> => x as Partial<TElement>

/** Cast a plain object or array to the node(s) type expected by editor.tf.insertNodes(). */
export const asNodes = (x: object | object[]): Descendant | Descendant[] =>
  x as unknown as Descendant | Descendant[]

/** Cast a plain array to the Value type expected by editor.tf.setValue(). */
export const asValue = (x: unknown[]): Value => x as unknown as Value

/** Cast a plain object to the location type (At) expected by editor.api.isEmpty() and similar. */
export const asAt = (x: object): At => x as unknown as At
