/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyRegExpExpression, JSNodeBase} from '../index';
import {createBuilder} from '../utils';

export type RegExpGroupNonCapture = JSNodeBase & {
  type: 'RegExpGroupNonCapture';
  expression: AnyRegExpExpression;
  kind?:
    | 'positive-lookahead'
    | 'negative-lookahead'
    | 'positive-lookbehind'
    | 'negative-lookbehind';
};

export const regExpGroupNonCapture = createBuilder<RegExpGroupNonCapture>(
  'RegExpGroupNonCapture',
  {
    bindingKeys: {},
    visitorKeys: {
      expression: true,
    },
  },
);
