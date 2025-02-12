function removeDuplicates(str: string): string {
    let set = new Set<string>();
    let ans: string = "";
    for (let i: number = 0; i < str.length; i++) {
        if (!set.has(str.charAt(i))) {
            set.add(str.charAt(i));
            ans += str.charAt(i);
        }
    }
    return ans;
}

let str: string = "bcabc";
console.log(removeDuplicates(str));

export { };