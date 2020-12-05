import { range, shuffle } from '@sandstreamdev/std/array';

export default (random = Math.random) => size => shuffle(range(size), random);
