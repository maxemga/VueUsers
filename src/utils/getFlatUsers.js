export const getFlatUsers = (arr) => {
  const users = []

  const flat = (arr) => {
    arr.forEach((user) => {
      users.push(user)
      if (user.childs.length) {
        flat(user.childs)
      }
    })
  }

  flat(arr)

  return users
}
