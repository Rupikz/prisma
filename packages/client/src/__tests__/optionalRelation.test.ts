import chalk from 'chalk'
import { blog } from '../fixtures/blog'
import { DMMFClass, makeDocument, transformDocument } from '../runtime'
import { getDMMF } from '../generation/getDMMF'
chalk.level = 0

describe('optional to one relation', () => {
  let dmmf
  beforeAll(async () => {
    dmmf = new DMMFClass(await getDMMF({ schema: blog }))
  })

  test('null query', () => {
    const select = {
      where: {
        author: null,
      },
    }
    const document = makeDocument({
      dmmf,
      select,
      rootTypeName: 'query',
      rootField: 'findManyPost',
    })

    expect(String(transformDocument(document))).toMatchInlineSnapshot(`
      query {
        findManyPost(where: {
          author: null
        }) {
          id
          createdAt
          updatedAt
          published
          title
          content
          authorId
          optionnal
        }
      }
    `)
  })
})
