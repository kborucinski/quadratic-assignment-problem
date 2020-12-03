import { range, shuffle } from "@sandstreamdev/std/array";

export default (size, random = Math.random) => shuffle(range(size), random);
