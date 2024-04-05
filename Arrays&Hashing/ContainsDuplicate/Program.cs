
/* 
Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/  

bool isDuplicate(int[] nums)
{
    if(nums.Length <= 0) return false;

    var listNums = new Dictionary<int,int>();
    for (int i = 0; i < nums.Length; i++)
    {
        listNums.Add(nums[i],);
    }
}