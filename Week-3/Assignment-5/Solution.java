import org.junit.jupiter.api.Test;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class Solution {
    /**
     * @param nums   an int array
     * @param target a target int number
     * @return Given an array of integers, return indices of the two numbers such that they add up to a
     * specific target.
     */
    public int[] twoSum(int[] nums, int target) {
        /*
        Initiate a HashMap that log occurrences of integer in the array.
        key: items in the int[]
        value: index
         */
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        // if target is 3, current integer is 2. We're looking for complement = 1.
        int complement;

        // only loop through this array once. O(n)
        for (int i = 0; i < nums.length; i++) {
            // put int into hashmap
            hashMap.put(nums[i], i);
            // check if complement is in HashMap (search hit)
            complement = target - nums[i];
            if (hashMap.containsKey(complement) && hashMap.get(complement) != i) {
                return new int[]{hashMap.get(complement), i};
            }
        }
        return (null);  // search miss
    }

    @Test
    public void testTwoSum() {
        Solution solution = new Solution();

        // Test case 1: Basic scenario
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] expected1 = {0, 1};
        assertArrayEquals(expected1, solution.twoSum(nums1, target1));

        // Test case 2: Another scenario
        int[] nums2 = {3, 2, 4};
        int target2 = 6;
        int[] expected2 = {1, 2};
        assertArrayEquals(expected2, solution.twoSum(nums2, target2));
    }
}