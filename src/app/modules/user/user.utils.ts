import { User } from './user.model'

const findLastUsrId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser
}

export const generateUserId = async () => {
  const currentId = (await findLastUsrId()) || (0).toString().padStart(5, '0')
  const incrementalId = (parseInt(currentId as string) + 1)
    .toString()
    .padStart(5, '0')
  return incrementalId
}
