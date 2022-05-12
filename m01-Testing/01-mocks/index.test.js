const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects } = require('assert')

  (
    async () => {
      const filePath = './mocks/emptyFile-invalid.csv'
      const rejection = new Error(error.FILE_LENGTH_ERROR_MENSAGE)
      const result = File.csvToJson(filePath)
      await rejects(result, rejection)
    }
  )