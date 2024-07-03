package com.yun_weidai.demo.assignment2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.math.BigInteger;

@RestController
public class getAccumulatedSumController {
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
        return ResponseEntity.ok().body(accumulatedSum.calc(number).toString());
    }
}
 