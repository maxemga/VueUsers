export const findUserById = (arr, id) => {
  for (const user of arr) {
    if (user.id === id) {
      return user
    }
    if (user.childs.length) {
      const foundUser = findUserById(user.childs, id)
      if (foundUser) {
        return foundUser
      }
    }
  }
  return null
}
