import { Request, Response } from 'express'
import userService from './user.service'

const createUser = (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = userService.createUser(user)

    res.status(200).json({
      success: 'Success',
      message: 'User Created Succefully',
      user: result,
    })
  } catch (error) {
    res.status(400).json({
      success: 'Failed',
      message: 'Failed To Create User',
    })
  }
}
export default {
  createUser,
}
