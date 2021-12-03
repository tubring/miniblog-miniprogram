import { promisify } from "@remax/framework-shared";

const toast = promisify(wx.toast)

export default toast