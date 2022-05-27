const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert');

(
  async () => {
    {
      const filePath = './mocks/empytFile-invalid.csv'
      const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
      const result = File.csvToJson(filePath)
      await rejects(result, rejection)
    }
    {
      const filePath = './mocks/fourItems-invalid.csv'
      const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
      const result = File.csvToJson(filePath)
      await rejects(result, rejection)
    }
    {
      const filePath = './mocks/threeItems-valid.csv'
      const result = await File.csvToJson(filePath)
      const expected = [
        {
          "id": 123,
          "name": "Mateus Ramos",
          "profession": "Javascript Developer",
          "age": 22
        },
        {
          "id": 321,
          "name": "Ana",
          "profession": "Javascript Expert",
          "age": 22
        },
        {
          "id": 231,
          "name": "desconhecido",
          "profession": "java developer",
          "age": 30
        }
      ]
      deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
  }
)()