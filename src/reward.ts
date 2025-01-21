import {
  BalanceChecked as BalanceCheckedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Redeemed as RedeemedEvent,
  Rewarded as RewardedEvent,
} from "../generated/Reward/Reward";
import { UserTransaction, RewardStats } from "../generated/schema";

export function handleBalanceChecked(event: BalanceCheckedEvent): void {
  // let entity = new UserTransaction(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.user = event.params.user
  // entity.balance = event.params.balance

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
  let transaction = new UserTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  transaction.user = event.params.user;
  transaction.eventType = "BalanceChecked";
  transaction.timestamp = event.block.timestamp;
  transaction.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let transaction = new UserTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  transaction.user = null; // OwnershipTransferred isn't tied to a user
  transaction.eventType = "OwnershipTransferred";
  transaction.points = null;
  transaction.tokens = null;
  transaction.previousOwner = event.params.previousOwner;
  transaction.newOwner = event.params.newOwner;
  transaction.timestamp = event.block.timestamp;
  transaction.save();
}

export function handleRedeemed(event: RedeemedEvent): void {
  let transaction = new UserTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  transaction.user = event.params.user;
  transaction.eventType = "Redeemed";
  transaction.points = event.params.points;
  transaction.tokens = event.params.tokens;
  transaction.timestamp = event.block.timestamp;
  transaction.save();
}

export function handleRewarded(event: RewardedEvent): void {
  let transaction = new UserTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  transaction.user = event.params.user;
  transaction.eventType = "Rewarded";
  transaction.points = event.params.points;
  transaction.timestamp = event.block.timestamp;
  transaction.save();

  let stats = RewardStats.load("1");
  if (!stats) {
    stats = new RewardStats("1");
    stats.totalRewards = event.params.points;
  } else {
    stats.totalRewards = stats.totalRewards.plus(event.params.points);
  }
  stats.save();
}
