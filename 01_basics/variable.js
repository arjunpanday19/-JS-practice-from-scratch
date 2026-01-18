const accountId = 454548;  // cant change
let accountEmail = "arjunpanday9369@gmail.com";
let accountState;  // undefine


/*
let is used insted of var because it is blocked scoped 
& can redeclare but can't update
*/

console.table([accountId, accountEmail, accountState]);
// ┌─────────┬─────────────────────────────┐
// │ (index) │ Values                      │
// ├─────────┼─────────────────────────────┤
// │ 0       │ 454548                      │
// │ 1       │ 'arjunpanday9369@gmail.com' │
// │ 2       │ undefined                   │
// └─────────┴─────────────────────────────┘

