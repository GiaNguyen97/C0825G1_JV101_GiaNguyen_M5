import {checkPrime} from "../bai1_checkPrime/checkPrime.js";

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const primes = arr.filter(checkPrime);
const n = primes.length;

n>0 ? console.log(primes) : console.log('Không có sô nguyên tố trong mảng');