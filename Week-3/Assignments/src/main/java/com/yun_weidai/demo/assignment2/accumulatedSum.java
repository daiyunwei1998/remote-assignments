package com.yun_weidai.demo.assignment2;

import java.math.BigInteger;

public class accumulatedSum {
    /**
     * @param num a BigInteger N
     * @return accumulated sum of 1 + 2 + 3 + ... + N.
     */
    public static BigInteger calc(BigInteger num) {
        // accept and return bigInteger to avoid numerical overflow
        num.add(BigInteger.ONE).multiply(num).divide(BigInteger.TWO);

        // Calculate sum from 1 to num
        return num.add(BigInteger.ONE).multiply(num).divide(BigInteger.TWO);
    }
}
