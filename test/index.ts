import DID from "../src/did";

var SEED =
  "NHYROMJIFOWRHOEECSDWFVBSSNUZOHNPHRVXZCGPTWMUTLQPCLEM9RPJ9SSNCPMYGFVFTQG9DIPLA9EZT";

var did = DID.fromSeed(SEED);

console.log(did.getIdentifier())
