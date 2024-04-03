const persion ={
    name: 'badam ali',
    job: 'alu khay',
    3: 'third',
    'add-ress': 'noakhali'
}
// option 1
console.log(persion.job)

// option 2
console.log(persion['job'])

// option 3
const prop = 'job'
console.log(persion[prop])

// must be use
console.log(persion[3])
console.log(persion['add-ress'])

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);
