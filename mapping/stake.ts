/* eslint-disable prefer-const */
import { BigInt } from "@graphprotocol/graph-ts";
import { Staking, Unstaking } from "../generated/schema";
import { Stake, Unstake } from "../generated/Stake/idia";

const BI_ONE = BigInt.fromI32(1);
export function handleStake(event: Stake): void {
  let stake = Staking.load(event.transaction.hash.toHex());
  if(stake == null)
  stake = new Staking(event.transaction.hash.toHex());

  stake.trackId = event.params.trackId;
  stake.user = event.params.user.toHex();
  stake.amount = event.params.amount;

  stake.save();
}

export function handleUnstake(event: Unstake): void {
  let unstake = Unstaking.load(event.transaction.hash.toHex());
  if(unstake == null)
  unstake = new Unstaking(event.transaction.hash.toHex());

  unstake.trackId = event.params.trackId;
  unstake.user = event.params.user.toHex();
  unstake.amount = event.params.amount;

  unstake.save();
}