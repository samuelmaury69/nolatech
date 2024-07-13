const bcrypt = require('bcryptjs')

const encrypt = async (passrowd) => {
    const hash = await bcrypt.hash(passrowd, 10)
    return hash
}

const compare = async (passrowd, hashPassword) => {
    return await bcrypt.compare(passrowd, hashPassword)
}

module.exports = { encrypt, compare }