/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from '../../Builder';
import {Token} from '../../tokens';
import {ReferenceIdentifier} from '@romejs/js-ast';
import Identifier from '../auxiliary/Identifier';

export default function ReferenceIdentifier(
  builder: Builder,
  node: ReferenceIdentifier,
): Token {
  return Identifier(builder, node);
}
