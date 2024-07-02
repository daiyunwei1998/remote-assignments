package com.yun_weidai.demo.rest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.math.BigInteger;

@RestController
public class RestContoller {
    @GetMapping("/")
    public String hello() {
        return "This is AppWork School Back-End Week-3 Assignment by Yun-wei Dai.";
    }

    @CrossOrigin
    @GetMapping("/data")
    public ResponseEntity<String> getAccumulatedSum(@RequestParam(value = "number", required = false) String numberString) {
        // if no parameter is specified "host:port/data"
        if (numberString == null) {
            return ResponseEntity.badRequest().body("Lack of Parameters.");
        }
        // use BigInteger to avoid numeric overflow
        BigInteger number;
        // check if parameter is integer
        try {
            number = new BigInteger(numberString);
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Wrong parameter.");
        }
        // check if parameter is positive
        if (number.compareTo(BigInteger.ONE) < 0) {
            // if negative integer
            return ResponseEntity.badRequest().body("Wrong parameter.");
        }
        // return 1+2+3+..+N
        return ResponseEntity.ok().body(accumulatedSum(number).toString());
    }

    /**
     * @param num a BigInteger N
     * @return accumulated sum of 1 + 2 + 3 + ... + N.
     */
    private BigInteger accumulatedSum(BigInteger num) {
        // accept and return bigInteger to avoid numerical overflow
        num.add(BigInteger.ONE).multiply(num).divide(BigInteger.TWO);

        // Calculate sum from 1 to num
        return num.add(BigInteger.ONE).multiply(num).divide(BigInteger.TWO);
    }
}
 