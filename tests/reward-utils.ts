import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BalanceChecked,
  OwnershipTransferred,
  Redeemed,
  Rewarded
} from "../generated/Reward/Reward"

export function createBalanceCheckedEvent(
  user: Address,
  balance: BigInt
): BalanceChecked {
  let balanceCheckedEvent = changetype<BalanceChecked>(newMockEvent())

  balanceCheckedEvent.parameters = new Array()

  balanceCheckedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  balanceCheckedEvent.parameters.push(
    new ethereum.EventParam(
      "balance",
      ethereum.Value.fromUnsignedBigInt(balance)
    )
  )

  return balanceCheckedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRedeemedEvent(
  user: Address,
  points: BigInt,
  tokens: BigInt
): Redeemed {
  let redeemedEvent = changetype<Redeemed>(newMockEvent())

  redeemedEvent.parameters = new Array()

  redeemedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam("points", ethereum.Value.fromUnsignedBigInt(points))
  )
  redeemedEvent.parameters.push(
    new ethereum.EventParam("tokens", ethereum.Value.fromUnsignedBigInt(tokens))
  )

  return redeemedEvent
}

export function createRewardedEvent(user: Address, points: BigInt): Rewarded {
  let rewardedEvent = changetype<Rewarded>(newMockEvent())

  rewardedEvent.parameters = new Array()

  rewardedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardedEvent.parameters.push(
    new ethereum.EventParam("points", ethereum.Value.fromUnsignedBigInt(points))
  )

  return rewardedEvent
}
