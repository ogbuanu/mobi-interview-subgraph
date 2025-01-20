import {
  BalanceChecked as BalanceCheckedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Redeemed as RedeemedEvent,
  Rewarded as RewardedEvent
} from "../generated/Reward/Reward"
import {
  BalanceChecked,
  OwnershipTransferred,
  Redeemed,
  Rewarded
} from "../generated/schema"

export function handleBalanceChecked(event: BalanceCheckedEvent): void {
  let entity = new BalanceChecked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.balance = event.params.balance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeemed(event: RedeemedEvent): void {
  let entity = new Redeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.points = event.params.points
  entity.tokens = event.params.tokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewarded(event: RewardedEvent): void {
  let entity = new Rewarded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.points = event.params.points

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
