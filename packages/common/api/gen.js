const { generateApi } = require('swagger-typescript-api');
const path = require('path');

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  name: 'type.ts',
  output: path.resolve(process.cwd(), './api'),
  httpClientType: 'axios',
  url: 'http://localhost:8082/api/v1/swagger/doc.json',
  templates: path.resolve(process.cwd(), './api/templates'),
  hooks: {
    onFormatTypeName: (typeName, rawTypeName) => {
      return rawTypeName.replace(/^types\./, '');
    },
  },
})
  .then(({ files, configuration }) => {
    // console.info(files);
    // files.forEach(({ content, name }) => {
    //   // console.info(path)
    //   fs.writeFile(path, content, console.info);
    // });
  })
  .catch((e) => console.error(e));
