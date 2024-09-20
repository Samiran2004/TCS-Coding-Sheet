const strArr = ["flower", "flow", "flight"];
console.log(findLongestCommonPrefix(strArr.sort()));

function findLongestCommonPrefix([...str]){
    const firstStr = str[0];
    const lastStr = str[str.length - 1];
    let ans = "";
    for(let i = 0; i<Math.min(firstStr.length, lastStr.length); i++){
        if(firstStr[i] != lastStr[i]){
            return ans;
        }
        ans += firstStr[i];
    }
    return ans;
}