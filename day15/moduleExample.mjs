export const collectionList=["abc, def, ghi","jkl","mno","pqr"]

export const addItems=(item)=>{
    return collectionList.push(item)
} 
export const removeItems = ()=>{
    return collectionList.pop()
}