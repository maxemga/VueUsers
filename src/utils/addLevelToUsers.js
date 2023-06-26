export const addLevelToUsers = (arr, level = 0) => {
  arr.forEach((user) => {
    user.level = level
    if (user.childs.length) {
      addLevelToUsers(user.childs, level + 1)
    }
  })

  return arr
}
