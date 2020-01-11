/*
 *
 * Copyright 2018-present NEM
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

import {
    Account,
    Deadline,
    KeyGenerator,
    MosaicGlobalRestrictionTransaction,
    MosaicId,
    MosaicRestrictionType,
    NetworkType,
    UInt64,
} from 'nem2-sdk';
import {RepositoryFactoryHttp} from 'nem2-sdk/dist/src/infrastructure/RepositoryFactoryHttp';

/* start block 01 */
// replace with cc.shares mosaic id
const sharesIdHex = '7cdf3b117a3c40cc';
const sharesId = new MosaicId(sharesIdHex);
// replace with kyc mosaic id
const kycIdHex = '183D0802BCDB97AF';
const kycId = new MosaicId(kycIdHex);
// replace with network type
const networkType = NetworkType.TEST_NET;

const key = KeyGenerator.generateUInt64Key('IsVerified'.toLowerCase());

const transaction = MosaicGlobalRestrictionTransaction
    .create(
        Deadline.create(),
        sharesId,  // mosaicId
        key, // restictionKey
        UInt64.fromUint(0), // previousRestrictionValue
        MosaicRestrictionType.NONE, // previousRestrictionType
        UInt64.fromUint(2), // newRestrictionValue
        MosaicRestrictionType.EQ,  // newRestrictionType
        networkType,
        kycId, // referenceMosaicId
        UInt64.fromUint(2000000));

const comfyClothingCompanyPrivateKey = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const comfyClothingCompanyAccount = Account.createFromPrivateKey(comfyClothingCompanyPrivateKey, networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';
const signedTransaction = comfyClothingCompanyAccount.sign(transaction, networkGenerationHash);
console.log(signedTransaction.hash);
// replace with node endpoint
const nodeUrl = 'http://api-harvest-20.us-west-1.nemtech.network:3000';
const repositoryFactory = new RepositoryFactoryHttp(nodeUrl, networkType, networkGenerationHash);
const transactionHttp = repositoryFactory.createTransactionRepository();

transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 01 */
