:orphan:

.. post:: 11 Aug, 2018
    :category: Aggregate Transaction
    :excerpt: 1
    :nocomments:

######################################
Sending multiple transactions together
######################################

Send transactions to different accounts at the same time, using aggregate transactions.

**********
Background
**********

Dan wants to send mosaics to Alice and Bob.
He could achieve this sending a couple of **TransferTransactions**.
However, to make sure Alice and Bob receive the funds at the same time, he decides to use an :ref:`AggregateTransaction <aggregate-transaction>`.

.. figure:: ../../resources/images/examples/aggregate-sending-payouts.png
    :align: center
    :width: 400px

    Sending transactions to different recipients atomically

*************
Prerequisites
*************

- Complete :doc:`sending mosaics and messages between two accounts <../transfer/sending-a-transfer-transaction>` guide.
- Create :ref:`accounts <setup-creating-a-test-account>` for Alice, Bob, and Dan.
- Load Dans's account with at least 200 |networkcurrency| units.

*************************
Method #01: Using the SDK
*************************

1. Open a new file, and define two :ref:`transfer transactions <transfer-transaction>` to send 10 |networkcurrency| to different recipients.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.ts
        :language: typescript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.js
        :language: javascript
        :start-after:  /* start block 01 */
        :end-before: /* end block 01 */

2. Wrap both transactions in an :ref:`AggregateTransaction <aggregate-transaction>`, adding Dan's public account as the required signer. As one private key—Dan's account—can sign all the transactions in the aggregate, we can define the transaction as *complete*.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.ts
        :language: typescript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.js
        :language: javascript
        :start-after:  /* start block 02 */
        :end-before: /* end block 02 */

3. Sign and announce the transaction with Dan's account.

.. example-code::

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.ts
        :language: typescript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

    .. viewsource:: ../../resources/examples/typescript/aggregate/SendingMultipleTransactionsTogetherWithAggregateCompleteTransaction.js
        :language: javascript
        :start-after:  /* start block 03 */
        :end-before: /* end block 03 */

************
What's next?
************

Send an AggregateBondedTransaction following :doc:`creating an escrow contract <creating-an-escrow-contract-with-aggregate-bonded-transaction>` guide.
