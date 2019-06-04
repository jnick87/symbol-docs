/*
 *
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {ChainHttp} from "nem2-sdk";

/* start block 01 */
const chainHttp = new ChainHttp('http://localhost:3000');

chainHttp
    .getBlockchainHeight()
    .subscribe(height => console.log(height.compact()), err => console.error(err));
/* end block 01 */
