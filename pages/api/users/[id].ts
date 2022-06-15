import type { NextApiRequest, NextApiResponse } from 'next'
import { IdRequestHandler } from "../../../lib/IdRequestHandler";

// let data = {
//   uuid:"test_uuid",
//   stats: {
//     woodcutting:9555,
//     mining:43
//   }
// };
//
// export default (req: NextApiRequest, res: NextApiResponse) => {
//   data.uuid = req.body.uuid; //Populate from database.
//   res.status(200).json(data); //Res success code if valid user.
// }

let userIdRequestHandler = new IdRequestHandler("User").getHandler()
export default userIdRequestHandler