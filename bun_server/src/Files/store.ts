import { BASE_PATH } from '../../packer.config'
import { getFilesRegex } from '../../../packer/getFiles'

export const files = await getFilesRegex(BASE_PATH, { include: '.md' })
